

export interface ITheme {
    theme?: string;
    setTheme?: React.Dispatch<React.SetStateAction<string>>;
    sizeTheme?: number;
    setSizeTheme?: React.Dispatch<React.SetStateAction<number>>;
    step?: string;
    setStep?: React.Dispatch<React.SetStateAction<string>>;
    ifManagerGlobal?: boolean;
    setManagerGlobal?: React.Dispatch<React.SetStateAction<boolean>>;
}