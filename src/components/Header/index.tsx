import { Mail } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export function Header(): JSX.Element {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                >
                    React Store
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    size='large'
                    aria-label='Carrinho com 7 itens'
                    color='inherit'
                >
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}