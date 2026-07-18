'use client';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Computer from '@mui/icons-material/Computer';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Grid from '@mui/material/Grid';
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from '@/app/components/tap-panel';
import React from 'react';


export default function ComputerScienceDepartment() {
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
                    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("/computer-scince.webp")',
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
                    <Computer sx={{ fontSize: 35 }} />
                </Avatar>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                    قسم <span style={{ color: '#f97316' }}>علوم الحاسب</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#cbd5e1' }}>
                    الرئيسية / الأقسام العلمية / قسم علوم الحاسب
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
                                orientation='vertical'
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
                                <Tab label="برامج علوم الحاسب" />
                                <Tab label="الهيكل التنظيمي" />
                                <Tab label="أعضاء هيئة التدريس" />
                                <Tab label="توصيف البرامج والمقررات" />
                                <Tab label="شئون الخريجين والطلاب" />
                            </Tabs>
                        </Paper>
                    </Grid>

                    {/* Content Area */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid #e2e8f0' }}>

                            {/* Tab 0: About the Department (عن القسم) */}
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

                                <Box sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 2 }}>
                                    <Typography sx={{ lineHeight: 2, textAlign: 'justify' }}>
                                        تأسس قسم علوم الحاسب منذ نشأة المعهد العالي لعلوم الحاسب ونظم المعلومات بالتجمع الخامس بالقاهرة بالقرار الوزاري رقم 841 لعام 2002، بغرض إمداد سوق العمل بخريجين متخصصين في مجالات علوم الحاسب، متميزين وقادرين على التوظيف والمنافسة على جميع المستويات.
                                    </Typography>
                                    <Typography sx={{ lineHeight: 2, textAlign: 'justify' }}>
                                        يدير قسم علوم الحاسب بالمعهد برنامج علوم الحاسب، حيث يتولى كل الأمور الإدارية الخاصة بالبرنامج بالتنسيق مع الأقسام الأخرى المشاركة في البرنامج ومع إدارة المعهد. فهو يقوم بتوفير أعضاء هيئة التدريس المؤهلين من المعينين والمنتدبين، ووضع الجداول الدراسية، وتوفير المعامل المناسبة، وكافة التجهيزات المطلوبة، ومتابعة المحاضرات والتمارين والامتحانات.
                                    </Typography>
                                    <Typography sx={{ lineHeight: 2, textAlign: 'justify' }}>
                                        يضم قسم علوم الحاسب مجموعة متميزة من أعضاء هيئة التدريس والهيئة المعاونة في تخصص علوم الحاسب القائمين على تدريس جميع المقررات المتخصصة في برنامج علوم الحاسب والبرامج الأخرى بالمعهد. كما يستعين بمجموعة من أقسام العلوم الأساسية في تخصصات مختلفة لتدريس مقررات العلوم الأساسية والعلوم الإنسانية.
                                    </Typography>
                                    <Typography sx={{ lineHeight: 2, textAlign: 'justify' }}>
                                        يوفر قسم علوم الحاسب بالمعهد المقومات المادية المناسبة لتنفيذ العملية التعليمية بالشكل المطلوب من القاعات التدريسية والمعامل والمكتبة، وجميعها مزودة بخدمات الإنترنت وأجهزة العرض والصوتيات المناسبة، بالإضافة إلى إدارة الامتحانات بالمعهد، وجميع الإدارات التي تخدم العملية التعليمية مثل إدارات شئون الطلاب، الخريجين، رعاية الشباب، التدريب، التسجيل الأكاديمي، والعيادة الطبية.
                                    </Typography>
                                </Box>
                            </TabPanel>

                            {/* Tab 1: Head of Department */}
                            <TabPanel value={tabValue} index={1}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 4 }}>
                                    كلمة رئيس القسم
                                </Typography>
                                <Typography sx={{ color: '#64748b' }}>
                                    هدفنا الأساسي هو ضمان التطوير المستمر لمناهج علوم الحاسب، مما يضمن حصول طلابنا على التدريب الذي يحتاجون له للمنافسة والازدهار في كل من الأعمال التجارية والأكاديمية .
                                    نحن نبذل قصارى جهدنا لمنح جميع موظفينا وطلابنا إمكانية الوصول إلى مجتمع أكاديمي مزدهر، لإنتاج خريجين يمكنهم تلبية متطلبات مكان العمل المعاصر .
                                    يمكن للخريجين العثور على فرص عمل في مجموعة متنوعة من القطاعات، بما في ذلك إدارة الشبكات، وتصميم الويب، والذكاء الاصطناعي، والنمذجة والمحاكاة ، وهندسة البرمجيات، والحسابات المالية . ويلتزم القسم بتحقيق الهدف الوطني المتمثل في تقديم مساهمات بارزة في مجتمع المعرفة من خلال التعليم عالي الجودة وخدمة المجتمع .

                                </Typography>
                            </TabPanel>

                            {/* Tab 2: Programs */}
                            <TabPanel value={tabValue} index={2}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 4 }}>
                                    برامج علوم الحاسب
                                </Typography>
                                <Typography sx={{ color: '#64748b' }}>سيتم إضافة المحتوى قريباً...</Typography>
                            </TabPanel>

                            {/* Add remaining empty TabPanels here to prevent crashes if clicked */}
                            <TabPanel value={tabValue} index={3}><Typography>محتوى الهيكل التنظيمي</Typography></TabPanel>
                            <TabPanel value={tabValue} index={4}><Typography>محتوى أعضاء هيئة التدريس</Typography></TabPanel>
                            <TabPanel value={tabValue} index={5}><Typography>محتوى توصيف البرامج</Typography></TabPanel>
                            <TabPanel value={tabValue} index={6}><Typography>محتوى شئون الخريجين</Typography></TabPanel>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}