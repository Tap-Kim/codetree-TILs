function printRect(n) { 
	for (let i = 0; i < n; i++) { 
		for (let j = 0; j < 10; j++) { 
		    process.stdout.write("*"); 
	    } 
	    process.stdout.write("\n"); 
	} 
}

printRect(5)