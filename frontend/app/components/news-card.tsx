'use client';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { components } from '../generated/dtype';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { MEDIA_URL } from '../utils/api';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';

type NewsCardProps = {
    news: components['schemas']['NewsSerializer'];
};

export default function NewsCard({ news }: NewsCardProps) {
    return (
        <Grid
            size={{ xs: 12, md: 4 }}
        >
            <Card sx={{ borderRadius: 3, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', overflow: 'hidden', height: '100%', '&:hover': { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }, transition: 'all 0.3s' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`${MEDIA_URL}/${news.image}`}
                    alt="أخبار المعهد"
                />
                <CardContent sx={{ p: 3 }}>
                    <Box className="flex flex-row gap-1 items-start">
                        <AccessTimeIcon fontSize="small" color="disabled" />
                        <Typography variant="caption" sx={{ color: '#ea580c', fontWeight: 'bold', display: 'block', mb: 1 }} suppressHydrationWarning>
                            {new Date(news.created_at).toLocaleDateString()}
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mb: 1.5, lineHeight: 1.3 }}>
                        {news.title}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: news.description ?? "" }} variant="body2" sx={{ color: '#64748b', lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    </Typography>
                    <Box className="w-full flex justify-center mt-3">
                        <Button component={Link} href={`/news/${news.id}`} variant="outlined">تفاصيل</Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}
