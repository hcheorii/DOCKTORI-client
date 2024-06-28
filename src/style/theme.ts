// src/theme.ts
export type ColorKey =
    | "first"
    | "second"
    | "third"
    | "text"
    | "lightgray"
    | "background";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal";

interface Theme {
    color: Record<ColorKey, string>;

    button: {
        [key in ButtonSize]: {
            fontSize: string;
            padding: string;
        };
    };
    buttonScheme: {
        [key in ButtonScheme]: {
            color: string;
            backgroundColor: string;
        };
    };
    borderRadius: {
        default: string;
    };
}

export const light: Theme = {
    color: {
        first: "#8e6547",
        second: "#BE8A62",
        third: "#f3b340",
        background: "#f3f0ed",
        lightgray: "lightgray",
        text: "black",
    },

    button: {
        large: {
            fontSize: "1.5rem",
            padding: "1rem 2rem",
        },
        medium: {
            fontSize: "1rem",
            padding: "0.5rem 1rem",
        },
        small: {
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
        },
    },
    buttonScheme: {
        primary: {
            color: "white",
            backgroundColor: "#8e6547",
        },
        normal: {
            color: "white",
            backgroundColor: "#f3b340",
        },
    },
    borderRadius: {
        default: "4px",
    },
};
