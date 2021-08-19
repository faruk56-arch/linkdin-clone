import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    );
    return (
        <div className="widgets">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Elon musk is back", "Top news 4000 readers")}
            {newsArticle("Coronavirus is back in france", "Top news 4001 readers")}
            {newsArticle("Tesla is back", "US news 565 readers")}
            {newsArticle("Is Redux too good?", "Code-445 readers")}
            {newsArticle("Coronavirus Suissse update", "CH news 400 readers")}
            {newsArticle("Coronavirus france update", "Le Monde news 433 readers")}
        </div>
    )
}

export default Widgets
