import GuessRowContainer from "./GuessRowContainer";

function PlaceholderRow({ rowNumber }: { rowNumber: number }) {
    return (
        <GuessRowContainer rowNumber={rowNumber}>
            <div className="block max-w-[30rem] rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-400 flex-grow"></div>
        </GuessRowContainer>
    )
}

export default PlaceholderRow;