import './Button.css'

function Button({clicked}) {

    return (
        <div className='button-container'>
            <div className='row'>
                <button onClick={()=>clicked('ac')}>Ac</button>
                <button onClick={()=>clicked('delete')}>&#8592;</button>
                <button onClick={()=>clicked('change')}>&#8723;</button>
                <button onClick={()=>clicked('÷')}>&#247;</button>
            </div>

            <div className='row'>
                <button onClick={()=>clicked('7')}>7</button>
                <button onClick={()=>clicked('8')}>8</button>
                <button onClick={()=>clicked('9')}>9</button>
                <button onClick={()=>clicked('×')}>&#215;</button>
            </div>

            <div className='row'>
                <button onClick={()=>clicked(4)}>4</button>
                <button onClick={()=>clicked(5)}>5</button>
                <button onClick={()=>clicked(6)}>6</button>
                <button onClick={()=>clicked('-')}>&#8722;</button>
            </div>

            <div className='row'>
                <button onClick={()=>clicked(1)}>1</button>
                <button onClick={()=>clicked(2)}>2</button>
                <button onClick={()=>clicked(3)}>3</button>
                <button onClick={()=>clicked('+')}>&#43;</button>
            </div>

            <div className='row'>
                <button onClick={()=>clicked('%')}>&#37;</button>
                <button onClick={()=>clicked(0)}>0</button>
                <button onClick={()=>clicked('.')}>.</button>
                <button>=</button>
            </div>
        </div>
    );
}

export default Button;