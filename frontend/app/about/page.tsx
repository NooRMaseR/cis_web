import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import RocketLaunch from '@mui/icons-material/RocketLaunch';
import CheckCircle from '@mui/icons-material/CheckCircle';
import FormatQuote from '@mui/icons-material/FormatQuote';
import TitleDevider from '../components/title-devider';
import Lightbulb from '@mui/icons-material/Lightbulb';
import { API, MEDIA_URL } from '../utils/api';
import Image from 'next/image';

type StrategicType = {
    category: string;
    title: string;
    points: string[];
};

const strategis: StrategicType[] = [
    { category: "جودة التعليم", title: "تطوير منظومة جودة التعليم والتعلم", points: ["تصميم برامج دراسية وفق معايير عالمية", "تطوير القدرات المؤسسية وتوفير بيئة داعمة"] },
    { category: "هيئة التدريس", title: "تنمية قدرات أعضاء هيئة التدريس", points: ["تشجيع استخدام التكنولوجيا في التعليم", "تطوير مهارات البحث العلمي والنشر الدولي"] },
    { category: "البحث العلمي", title: "تطوير البحث العلمي", points: ["دعم المشروعات البحثية التطبيقية", "تفعيل الشراكات مع قطاعات التكنولوجيا والأعمال"] },
    { category: "خدمة المجتمع", title: "تطوير خدمة المجتمع", points: ["تقديم استشارات تقنية وإدارية للمجتمع المحيط", "تفعيل دور الخريجين في تنمية سوق العمل"] }
];

export default async function AboutPage() {
    const { data } = await API.GET("/staff/");
    return (
        <Box dir="rtl" sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>
            {/* 1. Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '300px', md: '450px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    mb: 8,
                    overflow: 'hidden'
                }}
            >
                {/* The Image Component */}
                <Image
                    src="/about-us.webp"
                    alt="عن المعهد"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

                {/* Gradient Overlay */}
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(15, 23, 42, 0.75)',
                    zIndex: 1
                }} />

                {/* Content */}
                <Container sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
                        عن <span style={{ color: '#f97316' }}>المعهد</span>
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#cbd5e1', maxWidth: '800px', mx: 'auto' }}>
                        تعرف على رؤيتنا، رسالتنا، وأهدافنا الاستراتيجية التي نتبناها لبناء مستقبل أفضل.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg">

                {/* 2. Vision and Mission (الرؤية والرسالة) */}
                <Box sx={{ mb: 10 }}>
                    <TitleDevider text="الرؤية والرسالة" />

                    <Grid container spacing={4}>
                        {/* Vision Card */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card sx={{ height: '100%', borderRadius: 4, p: 2, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', borderTop: '4px solid #f97316' }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#fff3e0', color: '#ea580c', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                                        <Lightbulb sx={{ fontSize: 40 }} />
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#1e293b' }}>رؤية المعهد (Vision)</Typography>
                                    <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                        يتطلع المعهد العالي لعلوم الحاسب ونظم المعلومات بالتجمع الخامس إلى أن يكون مؤسسة تعليمية رائدة ومعتمدة محلياً وإقليمياً في مجالات علوم الحاسب ونظم المعلومات الإدارية، من خلال تقديم تعليم متميز وبحث علمي مبتكر يخدم المجتمع.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Mission Card */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card sx={{ height: '100%', borderRadius: 4, p: 2, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', borderTop: '4px solid #2563eb' }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#dbeafe', color: '#2563eb', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                                        <RocketLaunch sx={{ fontSize: 40 }} />
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#1e293b' }}>رسالة المعهد (Mission)</Typography>
                                    <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                        يلتزم المعهد بإعداد خريجين مؤهلين معرفياً ومهارياً للمنافسة في سوق العمل المحلي والإقليمي، وتوفير بيئة محفزة للبحث العلمي والابتكار، وتفعيل الشراكة المجتمعية بما يسهم في تحقيق التنمية المستدامة.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* 3. Dean's Message - Redesigned for readability */}
                <Box sx={{ mb: 10 }}>
                    <Paper elevation={0} sx={{ bgcolor: '#0f172a', borderRadius: 6, p: { xs: 4, md: 8 }, position: 'relative', overflow: 'hidden' }}>
                        <FormatQuote sx={{ position: 'absolute', top: -20, right: -20, fontSize: 200, color: 'rgba(255,255,255,0.03)', transform: 'rotate(180deg)' }} />

                        <Grid container sx={{ alignItems: "center" }} spacing={6}>
                            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                                <Avatar
                                    src="/doctors/Dean.jpg"
                                    sx={{ width: 220, height: 220, mx: 'auto', border: '6px solid #1e293b', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                                />
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mt: 3 }}>أ.د/ عبدالوهاب السماك</Typography>
                                <Typography variant="subtitle1" sx={{ color: '#f97316', fontWeight: 500 }}>عميد المعهد</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 8 }}>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, mb: 4, borderBottom: '2px solid #334155', pb: 2, display: 'inline-block' }}>
                                    كلمة عميد المعهد
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#cbd5e1', lineHeight: 2, fontSize: '1.1rem', textAlign: 'justify' }}>
                                    تشهد مجالات علوم الحاسب وتكنولوجيا المعلومات والذكاء الاصطناعي تطوراً هائلاً في الفترة الأخيرة وتعاظم دورها في معظم مجالات الأعمال مثل التعليم والصحة والصناعة والزراعة والاقتصاد والمحاسبة والادارة وحتي المجالات الترفيهية والتواصل الاجتماعي. ونتيجة للمعدل السريع في تطور تلك التقنيات وتأثيرها المباشر علي حياتنا اليومية، فانه من الضروري العمل علي ارتقاء العملية التعليمية في مجالات علوم الحاسب وتكنولوجيا المعلومات لمواكبة تلك التطورات. وعليه فان المعهد العالي لعلوم الحاسب ونظم المعلومات بالتجمع الخامس يقوم بدوره في تأهيل كوادر فنيه متخصصة من خريجين المعهد لديهم القدرة على التعامل بكفاءة مع تقنيات علوم الحاسب وتكنولوجيا المعلومات في مجالات الأعمال .وفي إطار ذلك فإن المعهد وما يمتلكه من كوادر بشرية متمثلة في أعضاء هيئة التدريس ومعاونيهم بالإضافة إلي إمكانياته المادية يقدم ثلاثة برامج أكاديمية نسعى لتطويرها باستمرار للحصول على درجة البكالوريوس في تخصصات :
                                    • علوم الحاسب • نظم المعلومات الادارية • المحاسبة والادارة
                                    ومن أجل مواكبة التطورات العالمية في التكنولوجيا وطرق التدريس وتحقيق التميز المهني ورفع المستوى الأكاديمي مع توفير فرص تعلم ذات جودة عالية لخريجي المعهد، قام المعهد بتطوير لائحته الأكاديمية لتواكب متطلبات سوق العمل المحلي والإقليمي وتفي بمتطلبات هيئة اعتماد مؤسسات التعليم العالي. وإذ نتطلع لمستقبل أفضل لخريجي المعهد ، يسعدنا تقديم الخدمات الالكترونية لطلاب المعهد مما يساعدهم علي الحصول علي المعلومات المتعلقة بالعملية التعليمية بالمعهد بشكل رسمي ودقيق.
                                    أطيب الامنيات لكم جميعاً بالتوفيق والنجاح.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>

                {/* 4. Strategic Goals (Replaces the ugly HTML table) */}
                <Box>
                    <TitleDevider text="الأهداف الاستراتيجية" />

                    <Grid container spacing={3}>
                        {strategis.map((goal, idx) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                                <Card sx={{ height: '100%', borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e2e8f0', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' } }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="overline" sx={{ color: '#ea580c', fontWeight: 800, fontSize: '0.85rem' }}>
                                            {goal.category}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b', mt: 1, mb: 3 }}>
                                            {goal.title}
                                        </Typography>
                                        <Stack spacing={2}>
                                            {goal.points.map((point, i) => (
                                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                                    <CheckCircle sx={{ color: '#10b981', fontSize: 20, mt: 0.5 }} />
                                                    <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
                                                        {point}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* 5. الهيكل الإداري (Management Section) */}
                <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
                    <Container maxWidth="lg">
                        <TitleDevider text="إدارة المعهد" />

                        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                            {data?.map((doctor) => (
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
            </Container>
        </Box>
    );
}