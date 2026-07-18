'use client';

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import TabPanel from "@/app/components/tap-panel";
import React from 'react';

// Icons
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutlined';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import TrackChanges from '@mui/icons-material/TrackChanges';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Visibility from '@mui/icons-material/Visibility';
import EmojiFlags from '@mui/icons-material/EmojiFlags';

export default function BusinessAdminDepartment() {
    const [tabValue, setTabValue] = React.useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box dir="rtl" sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>

            {/* 1. Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '250px', md: '350px' },
                    bgcolor: '#0f172a',
                    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("/accounting.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    mb: 6
                }}
            >
                <Avatar sx={{ bgcolor: '#ea580c', width: 70, height: 70, mb: 3, boxShadow: '0 4px 15px rgba(234, 88, 12, 0.5)' }}>
                    <BusinessCenter sx={{ fontSize: 35 }} />
                </Avatar>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                    قسم <span style={{ color: '#f97316' }}>إدارة الأعمال والمحاسبة</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#cbd5e1' }}>
                    الرئيسية / الأقسام العلمية / قسم إدارة الأعمال والمحاسبة
                </Typography>
            </Box>

            {/* 2. Main Content Grid */}
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    {/* Sidebar Menu */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                border: '1px solid #e2e8f0',
                                overflow: 'hidden',
                                position: { md: 'sticky' },
                                top: { md: '100px' }
                            }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                scrollButtons="auto"
                                value={tabValue}
                                onChange={handleTabChange}
                                sx={{
                                    borderRight: { md: 1 },
                                    borderColor: 'divider',
                                    '& .MuiTab-root': {
                                        alignItems: 'flex-start',
                                        textAlign: 'right',
                                        py: 2.5,
                                        px: 3,
                                        fontWeight: 600,
                                        color: '#64748b',
                                        minHeight: 'auto',
                                        borderBottom: { xs: 1, md: 0 },
                                        borderColor: 'divider',
                                        transition: 'all 0.2s',
                                    },
                                    '& .Mui-selected': {
                                        color: '#ea580c !important',
                                        bgcolor: '#fff7ed',
                                    },
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: '#ea580c',
                                        width: { md: '4px' },
                                        left: { md: 0 },
                                    }
                                }}
                            >
                                <Tab label="عن القسم" />
                                <Tab label="كلمة رئيس القسم" />
                                <Tab label="برامج القسم" />
                                <Tab label="الهيكل التنظيمي" />
                                <Tab label="أعضاء هيئة التدريس" />
                                <Tab label="توصيف البرامج والمقررات" />
                                <Tab label="شئون الخريجين والطلاب" />
                                <Tab label="أبحاث القسم" />
                            </Tabs>
                        </Paper>
                    </Grid>

                    {/* Content Area */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid #e2e8f0' }}>

                            {/* Tab 0: About the Department */}
                            <TabPanel value={tabValue} index={0}>
                                <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                    <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb' }}>
                                        <InfoOutlined />
                                    </Avatar>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                        عن القسم
                                    </Typography>
                                </Stack>
                                <Divider sx={{ mb: 4 }} />

                                {/* Intro Text */}
                                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 2, textAlign: 'justify', mb: 6 }}>
                                    تأسس قسم إدارة الأعمال والمحاسبة منذ نشأة المعهد العالي لعلوم الحاسب ونظم المعلومات بالتجمع الخامس، بالقاهرة بالقرار الوزاري رقم 841 لعام 2002 لغرض إمداد سوق العمل بخريجين متخصصين في مجال المحاسبة وإدارة الأعمال، متميزين وقادرين على المنافسة في سوق العمل.
                                </Typography>

                                {/* Vision and Mission Grid */}
                                <Grid container spacing={4} sx={{ mb: 6 }}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box sx={{ p: 3, bgcolor: '#f8fafc', borderRadius: 3, borderTop: '4px solid #f97316', height: '100%' }}>
                                            <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: "center" }}>
                                                <Visibility sx={{ color: '#f97316' }} />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0f172a' }}>الرؤية</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.8 }}>
                                                التميز في برامج المحاسبة وإدارة الأعمال على المستوى المحلي في تقديم خريج مزود بالمعارف والمهارات المتخصصة بحيث يكون قادراً على المنافسة في سوق العمل وتلبية احتياجات مؤسسات الأعمال وتقديم الخدمات المجتمعية المتميزة بما يحقق أهداف التنمية المستدامة.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box sx={{ p: 3, bgcolor: '#f8fafc', borderRadius: 3, borderTop: '4px solid #2563eb', height: '100%' }}>
                                            <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: "center" }}>
                                                <EmojiFlags sx={{ color: '#2563eb' }} />
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0f172a' }}>الرسالة</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.8 }}>
                                                تهيئة بيئة تعليمية متميزة في مجال المحاسبة وإدارة الأعمال لإعداد خريج قادر على تلبية احتياجات سوق العمل المحلية والإقليمية والعربية.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                {/* Goals */}
                                <Box sx={{ mb: 6 }}>
                                    <Stack direction="row" spacing={1.5} sx={{ mb: 3, alignItems: "center" }}>
                                        <TrackChanges sx={{ color: '#10b981', fontSize: 28 }} />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0f172a' }}>الأهداف</Typography>
                                    </Stack>
                                    <Stack spacing={2.5}>
                                        {[
                                            "طرح برامج أكاديمية تتلاءم مع احتياجات سوق العمل الفعلي.",
                                            "تزويد الطلاب بالمعارف والمهارات في مجال إدارة الأعمال والمحاسبة مما يؤهلهم لتلبية احتياجات مختلف أنواع منظمات الأعمال في البيئتين المحلية والإقليمية.",
                                            "تنمية قدرات الطلاب بالمهارات القيادية الأساسية لتأهيل شخصيات مؤهلة لسوق العمل.",
                                            "مد الجسور وتعميق العلاقة مع أصحاب العمل في سوق العمل ليستطيع الخريجون مواكبة التغير والتطور مما يمكن من المساهمة في التنمية الاقتصادية والاجتماعية في مصر والعالم العربي.",
                                            "تطوير القدرات والمهارات المهنية للقسم بما يتلاءم مع تحقيق رسالة وأهداف القسم لمواكبة التغيرات التقنية في مجال التخصص.",
                                            "تصميم بيئة تعليمية تفاعلية للطلاب بحيث يسمح بمعرفة معلومات ومهارات في مجال التخصص."
                                        ].map((goal, idx) => (
                                            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                                <CheckCircleOutline sx={{ color: '#f97316', fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                                                <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
                                                    {goal}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>

                                {/* Programs Offered */}
                                <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid #e2e8f0' }}>
                                    <Typography variant="h6" sx={{ color: '#64748b', mb: 3 }}>
                                        ويضم القسم برنامجي:
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                                        <Button variant="outlined" size="large" sx={{ color: '#ea580c', borderColor: '#ea580c', px: 4, borderRadius: 8 }}>
                                            إدارة الأعمال
                                        </Button>
                                        <Button variant="outlined" size="large" sx={{ color: '#ea580c', borderColor: '#ea580c', px: 4, borderRadius: 8 }}>
                                            المحاسبة والمراجعة
                                        </Button>
                                    </Stack>
                                </Box>

                            </TabPanel>

                            {/* Tab 1: Head of Department */}
                            <TabPanel value={tabValue} index={1}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 4 }}>
                                    كلمة رئيس القسم
                                </Typography>
                                <Typography sx={{ color: '#64748b' }}>
                                    هدفنا الأساسي هو ضمان التطوير المستمر في مجال المحاسبة والمراجعة بما يضمن للطلبة فرض عمل جيدة في سوق العمل حيث نبذل قصارى الجهد لمنح جميع العاملين في القسم من اساتذة و هيئة معاونة الاهتمام والامكانيات التي تمكنهم من الوصول الى مجتمع اكاديمي مزدهر يخدم المجتمع وينتج خريج قادر على المنافسة في سوق العمل .
                                </Typography>
                            </TabPanel>

                            <TabPanel value={tabValue} index={2}><Typography>محتوى البرامج</Typography></TabPanel>
                            <TabPanel value={tabValue} index={3}><Typography>محتوى الهيكل التنظيمي</Typography></TabPanel>
                            <TabPanel value={tabValue} index={4}><Typography>محتوى أعضاء هيئة التدريس</Typography></TabPanel>
                            <TabPanel value={tabValue} index={5}><Typography>محتوى توصيف البرامج</Typography></TabPanel>
                            <TabPanel value={tabValue} index={6}><Typography>محتوى شئون الخريجين</Typography></TabPanel>
                            <TabPanel value={tabValue} index={7}><Typography>أبحاث القسم</Typography></TabPanel>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}