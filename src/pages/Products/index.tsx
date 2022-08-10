import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product{
    id: number
    name: string
    description: string
    price: number
    image: string
    tags: string[]
    createdAt: string
    updatedAt: string
}

export function Products(): JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}?product_type=eyeliner`);

            const auxProducts: Product[] = response.data.map((product: any) => {

                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: parseFloat(product.price),
                    image: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
                    tags: product.tag_list,
                    createdAt: product.created_at,
                    updatedAt: product.updated_at
                }
            })

            setProducts(auxProducts)

        }

        fetchProducts()
    }, [])

    return (
        <Grid container spacing={2}>
            {products.map((product: Product) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard {...product} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

function ProductCard(props: Product): JSX.Element {
    return (
        <Card>
            <CardMedia
                component="img"
                height={180}
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <pre style={{ whiteSpace: 'initial' }} dangerouslySetInnerHTML={{ __html: props.description }} />
                </Typography>
                {props.tags.map((tag: string) => {
                    return (
                        <Chip label={tag} />
                    )
                })}
            </CardContent>
            <CardActions
                style={{
                    padding: '1rem',
                    justifyContent: 'flex-end'
                }}
            >
                <Button
                    size="small"
                >Adicionar ao carrinho</Button>
            </CardActions>
        </Card>
    )
}