import Link from 'next/link';

interface IButton {
    text: string;
    isLink: boolean;
    link?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick, isLink, link, disabled }: IButton) => {
    return (
        <button type="submit" className="app_button" onClick={onClick} disabled={disabled}>
            {isLink ? (
                <Link href={link || ''} target="_blanck">
                    {text}
                </Link>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
