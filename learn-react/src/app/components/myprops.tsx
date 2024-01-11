// prop definition
type ButtonProp= {
    name: string
    messageCount: number
}

export const MyButtonProp = (props: ButtonProp) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.messageCount}</p>
        </div>
    );
} ;