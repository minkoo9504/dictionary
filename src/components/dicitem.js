const DicItem = ({id, word, content, createDate, category}) => {
    return ( 
        <div className="dicitem">
            <div>
                <dl>
                    <dt>{word} <span>{category}</span></dt>
                    <dd>{content} <span>{createDate}</span></dd>
                </dl>
            </div>


        </div>
     );
}
 
export default DicItem;