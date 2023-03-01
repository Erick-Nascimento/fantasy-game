import './infos-container.scss'

function InfosContainer(){
    return(
        <section className='infosContainer'>
            <div className='closeMarket'>
                <p>Mercado fecha em</p>
                <span>1D 05h 35m 15s</span>
            </div>
            <hr />
            <div className='balanceAvailable'>
                <p>Saldo Disponível</p>
                <span>1D 05h 35m 15s</span>
            </div>
            <hr />
            <div className='TeamPrice'>
                <p>Preço do time</p>
                <span>1D 05h 35m 15s</span>
            </div>
        </section>
    )
}

export default InfosContainer