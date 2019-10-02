tcpdump -nAs0 -i $1 'port 80' -c $2 -n > output/$3
