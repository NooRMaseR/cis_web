'use client';

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import TabPanel from '@/app/components/tap-panel';
import React from 'react';

// Icons
import Science from '@mui/icons-material/Science';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import PeopleOutline from '@mui/icons-material/PeopleOutlined';

// Data for Faculty Members (أعضاء هيئة التدريس) based on the image layout
const faculty = [
    { name: "د/ أحمد علي", role: "عضو هيئة تدريس", hasImage: false },
    { name: "عضو هيئة تدريس", role: "عضو هيئة تدريس", hasImage: false },
    { name: "د/ محمد عمار", role: "عضو هيئة تدريس", hasImage: false },
    { name: "د/ ايمان طارق", role: "عضو هيئة تدريس", hasImage: false },
    { name: "عضو هيئة تدريس", role: "عضو هيئة تدريس", hasImage: false },
];

// Data for Teaching Assistants (أعضاء الهيئة المعاونة) based on the image layout
const teachingAssistants = [
    { name: "م.م/ نورا طارق", role: "مدرس مساعد", hasImage: false },
    { name: "م.م/ أماني محمد", role: "مدرس مساعد", hasImage: false },
    { name: "م/ عبد الله فواز", role: "معيد", hasImage: false },
    { name: "م/ ريهام عصام", role: "معيد", hasImage: false },
    { name: "م/ منة الله محمد", role: "معيد", hasImage: false },
    { name: "م/ ندى ياسر", role: "معيد", hasImage: false },
    { name: "عضو هيئة معاونة", role: "معيد", hasImage: false },
];

export default function PoliticalScienceDepartment() {
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
                    <Science sx={{ fontSize: 35 }} />
                </Avatar>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                    قسم <span style={{ color: '#f97316' }}>العلوم الأساسية</span>
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#cbd5e1' }}>
                    الرئيسية / الأقسام العلمية / قسم العلوم الأساسية
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
                                <Tab label="أعضاء هيئة التدريس" />
                                <Tab label="أعضاء الهيئة المعاونة" />
                            </Tabs>
                        </Paper>
                    </Grid>

                    {/* Content Area */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid #e2e8f0', minHeight: '60vh' }}>

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
                                <Divider sx={{ mb: 6 }} />

                                <Box sx={{ textAlign: 'center', py: 8 }}>
                                    <Science sx={{ fontSize: 80, color: '#e2e8f0', mb: 2 }} />
                                    <Typography variant="h6" sx={{ color: '#64748b' }}>
                                        قسم العلوم الأساسية يهدف إلى تزويد الطلاب بالأسس الرياضية والفيزيائية اللازمة لنجاحهم في مجالات الحاسب ونظم المعلومات.
                                        <br /><br />
                                        (سيتم إضافة التفاصيل الكاملة للقسم قريباً...)
                                    </Typography>
                                </Box>
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
                                    {faculty.map((member, idx) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`faculty-${idx}`}>
                                            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' } }}>
                                                {member.hasImage ? (
                                                    <Avatar src={`/api/placeholder/150/150`} sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '3px solid #f8fafc', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                                                ) : (
                                                    <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: '#e2e8f0', color: '#94a3b8', border: '3px solid #f8fafc', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                                                )}
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>{member.name}</Typography>
                                                <Typography variant="body2" sx={{ color: '#ea580c', mt: 0.5, fontWeight: 500 }}>{member.role}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
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

                                <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                                    {teachingAssistants.map((ta, idx) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`ta-${idx}`}>
                                            <Paper elevation={0} sx={{ p: 2.5, textAlign: 'center', border: '1px solid #e2e8f0', borderRadius: 4, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' } }}>
                                                {ta.hasImage ? (
                                                    <Avatar src={`/api/placeholder/150/150`} sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '2px solid #f1f5f9' }} />
                                                ) : (
                                                    <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: '#f1f5f9', color: '#94a3b8', border: '2px solid #fff' }} />
                                                )}
                                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#1e293b' }}>{ta.name}</Typography>
                                                <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mt: 0.5 }}>{ta.role}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}