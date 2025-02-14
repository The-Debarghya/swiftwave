package cmd

import (
	"errors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"net"
	"os"
	"os/exec"

	"github.com/fatih/color"
	"github.com/spf13/cobra"
)

func getDBClient() (*gorm.DB, error) {
	dbDialect := postgres.Open(systemConfig.PostgresqlConfig.DSN())
	if systemConfig.IsDevelopmentMode {
		return gorm.Open(dbDialect, &gorm.Config{})
	}
	return gorm.Open(dbDialect, &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})
}

func checkIfCommandExists(command string) bool {
	cmd := exec.Command("which", command)
	err := cmd.Run()
	return err == nil
}

func checkIfFolderExists(folder string) bool {
	cmd := exec.Command("ls", folder)
	err := cmd.Run()
	return err == nil
}

func createFolder(folder string) error {
	// mkdir -p
	cmd := exec.Command("mkdir", "-p", folder)
	err := cmd.Run()

	if err != nil {
		return errors.New("failed to create folder > " + folder)
	}
	return nil
}

func checkIfFileExists(file string) bool {
	cmd := exec.Command("ls", file)
	err := cmd.Run()
	return err == nil
}

func checkIfPortIsInUse(port string) bool {
	// Attempt to establish a connection to the address
	conn, err := net.Dial("tcp", ":"+port)
	if err != nil {
		return false
	}
	defer conn.Close()
	return true
}

func openFileInEditor(filePath string) {
	// Check if the $EDITOR environment variable is set
	editor := os.Getenv("EDITOR")

	if editor != "" {
		// $EDITOR is set, use it to open the file
		cmd := exec.Command(editor, filePath)
		cmd.Stdin = os.Stdin
		cmd.Stdout = os.Stdout
		cmd.Stderr = nil

		if err := cmd.Run(); err != nil {
			printError("Error opening file with " + editor)
		}
	} else {
		// $EDITOR is not set, try using mimeopen
		cmd := exec.Command("mimeopen", "-d", filePath)
		cmd.Stdin = os.Stdin
		cmd.Stdout = os.Stdout
		cmd.Stderr = nil

		if err := cmd.Run(); err != nil {
			printError("Error opening file with mimeopen")
			printError("Set the $EDITOR environment variable to open the file with your preferred editor")
		}
	}
}

func printSuccess(message string) {
	color.Green(TickSymbol + " " + message)
}

func printError(message string) {
	color.Red(CrossSymbol + " " + message)
}

func printInfo(message string) {
	color.Blue(InfoSymbol + " " + message)
}

func isDevelopmentMode(cmd *cobra.Command) bool {
	dev, _ := cmd.Flags().GetBool("dev")
	return dev
}
