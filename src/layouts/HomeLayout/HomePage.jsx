import React from 'react'
import SiteHeader from '../../components/SiteHeader/SiteHeader'
import News from '../../components/News/News'
import Pagination from '@mui/material/Pagination';
import Spinner from '../../components/Spinner/Spinner'
import { useNewsList } from '../../hooks/newsList'
import CardMedia from '@mui/material/CardMedia';
import './style.css'

const HomePage = () => {

    const { newsArr, isError } = useNewsList()

    const [itemOffset, setItemOffset] = React.useState(0);
    const endOffset = itemOffset + 2;
    const currentItems = newsArr?.slice(itemOffset, endOffset);

    const handlePageClick = (e, page) => {
        const newOffset = ((page - 1) * 2) % newsArr.length;
        setItemOffset(newOffset);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <SiteHeader/>
            {
                newsArr && currentItems
            ?
                <>
                    <div className = "newsList__wrapper">
                        {currentItems.map((item) => {
                            return (
                                <div className = "news__wrapper" key = {item.id + 8}>
                                    <News item = {item}/>
                                </div>
                            )
                        })}
                        <Pagination 
                            count={Math.ceil(newsArr.length / 2)} 
                            color="primary" 
                            onChange = {handlePageClick}
                            className = "footer__pagination"
                        />
                    </div>
                </>
            :
                <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <Spinner/>
                </div>
            }
        </>
    )
}



export default React.memo(HomePage)