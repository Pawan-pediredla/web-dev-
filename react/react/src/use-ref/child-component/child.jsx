export function Child({forwardRef})
{
    return(
        <>
        <input type="text" ref={forwardRef}/>
        </>
    )

}