package main

import (
	"fmt"
	"os"
	// "sync"
	. "keroku/m/haproxy_manager"
)



func main() {
	// var wg sync.WaitGroup

	// Create a new HAProxySocket
	var haproxySocket = HAProxySocket{};
	haproxySocket.InitTcpSocket("localhost", 5555);
	haproxySocket.Auth("admin", "mypasswrd");
	errFound := false;
	transaction_id, err := haproxySocket.FetchNewTransactionId()
	if err != nil {
		os.Exit(1)
		return
	}

	// Add backend
	// if err != nil {
	// 	errFound = true;
	// }else{
	// 	err := haproxySocket.AddBackend(transaction_id, "minc-service", 3000, 3);
	// 	if err != nil {
	// 		errFound = true;
	// 	}else{
	// 		err := haproxySocket.AddBackend(transaction_id, "minc-service", 3001, 3);
	// 		if err != nil {
	// 			errFound = true;
	// 		}else{
	// 			err := haproxySocket.AddBackend(transaction_id, "minc-service", 3002, 3);
	// 			if err != nil {
	// 				errFound = true;
	// 			}
	// 		}
	// 	}
	// 	if err != nil {
	// 		errFound = true;
	// 	}
	// 	fmt.Println("Add backend")
	// }

	if errFound {
		fmt.Println("Deleting transaction: "+transaction_id)
		haproxySocket.DeleteTransaction(transaction_id)
		fmt.Println("Error found")
	}else{
		fmt.Println("Committing transaction: "+transaction_id)
		haproxySocket.CommitTransaction(transaction_id)
		fmt.Println("No error found")
	}


	// Wait for events
	// wg.Wait()
	fmt.Println("done")
}
