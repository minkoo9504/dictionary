import DicItem from "./dicitem";

const DicList = ({datas}) => {
    return ( 
        <div className="diclist">
            <h2> 리스트 </h2>
            <div>
                <ul>
                    {datas.map((data)=>    //map 에는 key 가있어야함
                        <DicItem key={data.id} {...data} />
                    )}
                    <li>list</li>
                </ul>
            </div>
        </div>
     );
}
 
export default DicList