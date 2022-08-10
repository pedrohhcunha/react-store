import { Box } from "@mui/system";

interface Props {
    children: React.ReactNode;
}

export function Main(props: Props): JSX.Element {
    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: "4rem"
            }}
        >
            {props.children}
        </Box>
    )
}