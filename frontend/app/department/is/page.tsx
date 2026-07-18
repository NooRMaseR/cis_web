'use client';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import TabPanel from '@/app/components/tap-panel';
import React from 'react';

// Icons
import PeopleOutline from '@mui/icons-material/PeopleOutlined';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountTree from '@mui/icons-material/AccountTree';
import Language from '@mui/icons-material/Language';
import MenuBook from '@mui/icons-material/MenuBook';

const teachingAssistants = Array(11).fill({
    name: "عضو هيئة معاونة",
    role: "معيد / مدرس مساعد"
});

export default function InformationSystemsDepartment() {
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
                    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("/Information_Systems.webp")',
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
                    <AccountTree sx={{ fontSize: 35 }} />
                </Avatar>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                    قسم <span style={{ color: '#f97316' }}>نظم معلومات الأعمال</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#cbd5e1' }}>
                    الرئيسية / الأقسام العلمية / قسم نظم معلومات الأعمال
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
                                <Tab label="عن البرنامج (الرسالة)" />
                                <Tab label="أعضاء هيئة التدريس" />
                                <Tab label="أعضاء الهيئة المعاونة" />
                                <Tab label="اللوائح وجداول الامتحانات" />
                            </Tabs>
                        </Paper>
                    </Grid>

                    {/* Content Area */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid #e2e8f0', minHeight: '60vh' }}>

                            {/* Tab 0: Program Mission (عن البرنامج) */}
                            <TabPanel value={tabValue} index={0}>
                                <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                    <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb' }}>
                                        <MenuBook />
                                    </Avatar>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                        برنامج بكالوريوس نظم معلومات الأعمال
                                    </Typography>
                                </Stack>
                                <Divider sx={{ mb: 6 }} />

                                <Grid container spacing={4}>
                                    {/* Arabic Mission */}
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box sx={{ p: 4, bgcolor: '#f8fafc', borderRadius: 4, borderTop: '4px solid #f97316', height: '100%' }}>
                                            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 3, textAlign: 'center' }}>
                                                رسالة البرنامج
                                            </Typography>
                                            <Typography sx={{ color: '#475569', lineHeight: 2, textAlign: 'justify', fontSize: '1.1rem' }}>
                                                يلتزم برنامج نظم معلومات الأعمال بالمعهد العالي لعلوم الحاسب ونظم المعلومات بإعداد خريج متميز مزود بالمعارف والمهارات العملية والعلمية في مجال نظم المعلومات بما يلبي احتياجات سوق العمل المحلي والإقليمي، وتقديم خدمات مجتمعية في إطار من القيم والأخلاقيات المهنية.
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* English Mission */}
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box dir="ltr" sx={{ p: 4, bgcolor: '#f8fafc', borderRadius: 4, borderTop: '4px solid #2563eb', height: '100%' }}>
                                            <Stack direction="row" spacing={1} sx={{ mb: 3, justifyContent: "center", alignItems: "center" }}>
                                                <Language sx={{ color: '#2563eb' }} />
                                                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                                    MISSION
                                                </Typography>
                                            </Stack>
                                            <Typography sx={{ color: '#475569', lineHeight: 1.8, textAlign: 'justify', fontSize: '1.05rem' }}>
                                                Business Information systems Program at the higher institute of computer science and information systems prepares a distinct graduate equipped with the practical and scientific knowledge and skills in the field of business information systems. The program enables graduates to compete successfully in the local and regional labor market and to deliver community services within the framework of professional and ethical values.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </TabPanel>

                            {/* Tab 1: Faculty Members (أعضاء هيئة التدريس) */}
                            <TabPanel value={tabValue} index={1}>
                                <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                    <Avatar sx={{ bgcolor: '#fef2f2', color: '#dc2626' }}>
                                        <PeopleOutline />
                                    </Avatar>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                        أعضاء هيئة التدريس
                                    </Typography>
                                </Stack>
                                <Divider sx={{ mb: 6 }} />

                                <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                        <Paper elevation={0} sx={{ p: 2, textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: 3 }}>
                                            <Avatar src="/doctors/Kamal Hefny.jpg" sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>د/ كمال حفني هاشم</Typography>
                                            <Typography variant="body2" sx={{ color: '#ea580c', mt: 0.5 }}>أستاذ مساعد</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                        <Paper elevation={0} sx={{ p: 2, textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: 3 }}>
                                            <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: '#e2e8f0' }} />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>عضو هيئة تدريس</Typography>
                                            <Typography variant="body2" sx={{ color: '#ea580c', mt: 0.5 }}>أستاذ مساعد</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </TabPanel>

                            {/* Tab 2: Teaching Assistants (أعضاء الهيئة المعاونة) */}
                            <TabPanel value={tabValue} index={2}>
                                <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                    <Avatar sx={{ bgcolor: '#f0fdf4', color: '#16a34a' }}>
                                        <PeopleOutline />
                                    </Avatar>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                        أعضاء الهيئة المعاونة
                                    </Typography>
                                </Stack>
                                <Divider sx={{ mb: 6 }} />

                                <Grid container spacing={3}>
                                    {teachingAssistants.map((ta, idx) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: 3, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' } }}>
                                                <Avatar sx={{ width: 90, height: 90, mx: 'auto', mb: 2, bgcolor: '#f1f5f9', color: '#94a3b8' }} />
                                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#1e293b' }}>{ta.name}</Typography>
                                                <Typography variant="caption" sx={{ color: '#64748b', display: 'block' }}>{ta.role}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>

                            {/* Tab 3: Regulations and Schedules */}
                            <TabPanel value={tabValue} index={3}>
                                {/* Regulations Accordion */}
                                <Box sx={{ mb: 8 }}>
                                    <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                        <Avatar sx={{ bgcolor: '#fff7ed', color: '#ea580c' }}>
                                            <MenuBook />
                                        </Avatar>
                                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                            اللوائح الأكاديمية
                                        </Typography>
                                    </Stack>

                                    <Accordion elevation={0} sx={{ border: '1px solid #e2e8f0', '&:before': { display: 'none' }, mb: 1, borderRadius: '8px !important' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#f8fafc', borderRadius: '8px' }}>
                                            <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>اللائحة الأكاديمية لبرامج العلوم التجارية بنظام الساعات المعتمدة</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{ color: '#475569', lineHeight: 2 }}>
                                                تفاصيل اللائحة الأكاديمية وشروط التخرج ونظام التقييم للساعات المعتمدة.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                {/* Exam Schedules */}
                                <Box>
                                    <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
                                        <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb' }}>
                                            <CalendarMonth />
                                        </Avatar>
                                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                            جداول الامتحانات
                                        </Typography>
                                    </Stack>

                                    <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Button
                                                variant="outlined"
                                                fullWidth
                                                sx={{ py: 3, color: '#ea580c', borderColor: '#ea580c', borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 1 }}
                                            >
                                                <CalendarMonth sx={{ fontSize: 30 }} />
                                                <Typography sx={{ fontWeight: 'bold' }}>جدول امتحانات اللائحة الحديثة</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <Button
                                                variant="outlined"
                                                fullWidth
                                                sx={{ py: 3, color: '#475569', borderColor: '#cbd5e1', borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 1 }}
                                            >
                                                <CalendarMonth sx={{ fontSize: 30 }} />
                                                <Typography sx={{ fontWeight: 'bold' }}>جدول امتحانات اللائحة القديمة</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </TabPanel>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}