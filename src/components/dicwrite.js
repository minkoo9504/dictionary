const DicWrite = ({onCreate,onChange,word,category,content}) => {
    return ( 
        <div className="dicwrite">
            <div>
                <input type="text" placeholder="단어" name="word" value={word} onChange={onChange} />
            </div>
            <div>
                <textarea placeholder="설명글" name="content" value={content} onChange={onChange} />
            </div>
            <div>
                <select name="category" value={category} onChange={onChange}>
                    <option value={'html'}>html</option>
                    <option value={'css'}>css</option>
                    <option value={'js'}>JavaScript</option>
                    <option value={'node'}>node</option>
                    <option value={'react'}>react</option>
                </select>
            </div>
            <div>
                <button onClick={onCreate}>저장</button>
            </div>
        </div>
     );
}
 
export default DicWrite;