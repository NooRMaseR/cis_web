import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TopCarousel from './components/carousel';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PlayCircleOutlineRounded from "@mui/icons-material/PlayCircleOutlineRounded";
import TitleDevider from "./components/title-devider";
import NewsCard from "./components/news-card";
import { API, MEDIA_URL } from "./utils/api";
import Link from "next/link";

export const revalidate = 10

export default async function HomePage() {
  const [{ data: slidersData }, { data: newsData }, { data: staffData }] = await Promise.all(
    [
      API.GET("/slides/"),
      API.GET("/news/", {params: {query: {limit: 3}}}),
      API.GET("/staff/"),
    ]
  );

  return (
    <Box dir="rtl" sx={{ bgcolor: '#f8fafc', minHeight: 'screen' }}>
      {/* 1. قسم البانر الرئيسي (Hero Section) */}
      <TopCarousel content={slidersData || []} />

      {/* 2. قسم الأخبار والأحداث (News Section) */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Stack sx={{ justifyContent: "space-between", alignItems: "center", mb: { sx: 6 } }} direction="row">
            <Box>
              <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 850, color: '#0f172a', position: 'relative', pb: 1 }}>
                أحدث الأخبار والأحداث
                <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 4, bgcolor: '#f97316', borderRadius: 1 }} />
              </Typography>
            </Box>
            <Link href="/news" className="text-[#ea580c] font-bold">عرض الكل &larr;</Link>
          </Stack>

          <Grid container spacing={4}>
            {newsData?.map((item) => (
              <NewsCard news={item} key={item.id} />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. قسم الفيديو (Video Showcase) */}
      <Box sx={{ py: 10, bgcolor: '#0f172a', color: '#ffffff' }}>
        <Container maxWidth="md">
          <TitleDevider text="فيديوهات توضيحية للمستجدين" color={"#fff"} />
          
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '16/9',
              backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.5)), url("/about-us.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid #334155'
            }}
          >
            <IconButton title="Play Video" sx={{ color: '#f97316', '&:hover': { transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}>
              <PlayCircleOutlineRounded sx={{ fontSize: 80 }} />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              خطوات تسجيل المقررات واستخدام بوابة الطالب
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* 4. الهيكل الإداري (Management Section) */}
      <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <TitleDevider text="إدارة المعهد" />
          
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {staffData?.map((doctor) => (
              <Grid
                key={doctor.id}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ textAlign: 'center' }}
              >
                <Avatar
                  src={`${MEDIA_URL}/${doctor.image}`}
                  alt={doctor.name}
                  sx={{
                    width: 160,
                    height: 160,
                    mx: 'auto',
                    mb: 2.5,
                    border: '4px solid #f1f5f9',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: '#fed7aa' }
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                  {doctor.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ea580c', fontWeight: 600, mt: 0.5 }}>
                  {doctor.role}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
