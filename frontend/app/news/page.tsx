import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NewsCard from '../components/news-card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { API } from '../utils/api';

export default async function NewsPage() {
    const { data } = await API.GET("/news/", { params: { query: { limit: 0 } } })
    return (
        <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
            <Container maxWidth="lg">
                <Stack sx={{ justifyContent: "space-between", alignItems: "center", mb: { sx: 6 } }} direction="row">
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 850, color: '#0f172a', position: 'relative', pb: 1 }}>
                            أحدث الأخبار والأحداث
                            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 4, bgcolor: '#f97316', borderRadius: 1 }} />
                        </Typography>
                    </Box>
                    <Button sx={{ color: '#ea580c', fontWeight: 'bold' }}>عرض الكل &larr;</Button>
                </Stack>

                <Grid container spacing={4}>
                    {data?.map((item) => (
                        <NewsCard news={item} key={item.id} />
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
