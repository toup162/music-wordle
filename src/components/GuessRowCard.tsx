import { ReactNode } from "react";

function GuessRowCard(props: { title: string, text: string, backgroundClass: string, widthRem: number, correct: boolean }) {
    const { title, text, backgroundClass, widthRem, correct } = props;

    const renderCardTitle = (
        text: string,
        correct: boolean = true
    ): ReactNode => (
        <div className="flex justify-between">
            <span>{text}</span>
            <span>{correct ? "✅" : "❌"}</span>
        </div>
    );

    return (
        <div
            className={`block min-w-[${widthRem}rem] flex-grow rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${backgroundClass} mr-2`}
        >
            <div className="p-2">
                <h5 className="mb-1 text-sm md:text-base font-medium leading-tight text-neutral-50">
                    {renderCardTitle(title, correct)}
                </h5>
                <p className="text-xs md:text-sm leading-normal text-neutral-100">{text}</p>
            </div>
        </div>
    );
}

export default GuessRowCard;
