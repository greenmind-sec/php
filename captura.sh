
# tcpdump -nAs0 -i wlp3s0 'port 80' -c 10 -n > output/saida.txt
tcpdump -nAs0 -i $1 'port 80' -c $2 -n > output/$3
