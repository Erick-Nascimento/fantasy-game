import './transaction-btn.scss';

function TransactionBtn({playerId}){

    function buyPlayer(e){
        console.log('Comprou Jogador', e.target.id)
    }

    return(
        <button className='transactionBtn' id={playerId} onClick={buyPlayer}>Comprar</button>
    )
}

export default TransactionBtn