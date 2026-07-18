import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Icons
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { API, MEDIA_URL } from '@/app/utils/api';

export const revalidate = 10;

export default async function NewsArticlePage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const { data } = await API.GET("/news/{id}/", { params: { path: { id } } });

    return (
        <Box dir="rtl" sx={{ bgcolor: '#f4ece1', minHeight: '100vh', pb: 10, fontFamily: 'Arial, sans-serif' }}>

            {/* 1. Hero Section */}
            <Box sx={{
                position: 'relative',
                height: 300,
                backgroundImage: `url("${MEDIA_URL}/${data?.image}")`, // Replace with your actual background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 6,
                borderTop: '4px solid #ea580c'
            }}>
                {/* Dark Overlay */}
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.4)' }} />

                {/* Title Box */}
                <Box sx={{
                    position: 'relative',
                    bgcolor: 'rgba(15, 23, 42, 0.8)',
                    px: 6,
                    py: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    border: '1px solid #334155'
                }}>
                    <Typography variant="h3" sx={{ color: '#f97316', fontWeight: 'bold', mb: 1 }}>
                        أخبارنا
                    </Typography>
                    <NewspaperIcon sx={{ color: 'white', fontSize: 40, mb: 1 }} />
                    <Typography variant="subtitle2" sx={{ color: 'white' }}>
                        الرئيسية {'>'} أخبارنا {'>'} {data?.title}
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg" dangerouslySetInnerHTML={{ __html: data?.full_description ?? "" }} >
            </Container>
        </Box>
    );
}