document.addEventListener('DOMContentLoaded', () => {
    const balanceForm = document.getElementById('balanceForm');
    const balanceResult = document.getElementById('balanceResult');
    const transactionHistory = document.getElementById('transactionHistory');

    balanceForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const address = event.target.address.value;

        try {
            const balance = await fetchBalance(address);
            const etherBalance = balance / 1e18;
            const formattedBalance = parseFloat(etherBalance).toFixed(4);

            balanceResult.innerHTML = `<p>Balance of address: ${formattedBalance} ETH</p>`;
            transactionHistory.innerHTML = '';
            const transactions = await fetchTransactionHistory(address);
            displayTransactionHistory(transactions);
        } catch (error) {
            console.error(error);
            balanceResult.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });

    const fetchBalance = async (address) => {
        const apiKey = 'enter your API Key'; 
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`);
        const data = await response.json();

        if (data.status === "1") {
            return data.result;
        } else {
            throw new Error(data.message);
        }
    };

    const fetchTransactionHistory = async (address) => {
        const apiKey = 'enter your API KEY'; 
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`);
        const data = await response.json();

        console.log(data);

        if (data.status === "1" && Array.isArray(data.result)) {
            return data.result;
        } else {
            console.error('Error fetching transaction history:', data.message);
            return []; 
        }
    };

    const displayTransactionHistory = (transactions) => {
        if (!Array.isArray(transactions) || transactions.length === 0) {
            transactionHistory.innerHTML = '<p>No transactions found for this address.</p>';
            return;
        }

        const transactionList = transactions.map(tx => `
            <li>
                <strong>Hash:</strong> ${tx.hash} <br>
                <strong>Value:</strong> ${web3.utils.fromWei(tx.value, 'ether')} ETH <br>
                <strong>From:</strong> ${tx.from} <br>
                <strong>To:</strong> ${tx.to} <br>
                <strong>Date:</strong> ${new Date(tx.timeStamp * 1000).toLocaleString()} <br>
                <hr>
            </li>
        `).join('');

        transactionHistory.innerHTML = `
            <h3>Transaction History:</h3>
            <ul>${transactionList}</ul>
        `;
    };
});