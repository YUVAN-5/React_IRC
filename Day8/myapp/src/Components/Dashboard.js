function Dashboard()
{
    return(
        <>
            {/* <nav> */}
                <div className=' hv-100 wv-100 flex flex-col'>
                    <div className='hv-5 wv-100 flex theme-bg item-center justify-center'>
                        {/* <div className='hv-90 wv-100 flex justify-center'> */}
                                hello
                        {/* </div> */}

                    </div>

                    <div className='hv-95 wv-100 flex flex-row'>
                        <div className='hv-80 wv-10  theme-bg flex flex-row '>
                                leftbar
                        </div>
                        <div className=' hv-90 wv-90 flex flex-row'>  
                            content
                            
                        </div>

                    </div>
                </div>
            
        </>
    );
}
export default Dashboard;