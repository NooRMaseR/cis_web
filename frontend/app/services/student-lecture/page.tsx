'use client';

import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from 'react';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { useForm } from "react-hook-form";
import { API } from "@/app/utils/api";
import type { components } from "@/app/generated/dtype";

// 1. Types from OpenAPI generation
type StudentScheduleForm = components['schemas']['StudentDataRequest'];
type ScheduleRow = components['schemas']['StudentSubjectSerializer'];

export default function StudentScheduleSearch() {
    const [hasSearched, setHasSearched] = React.useState<boolean>(false);
    const [results, setResults] = React.useState<ScheduleRow[]>([]);
    const [visibleErrors, setVisibleErrors] = React.useState<string[]>([]);
    
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<StudentScheduleForm>();

    const handleSearch = async (data: StudentScheduleForm) => {
        // Reset states
        setHasSearched(false);
        setResults([]);
        setVisibleErrors([]);

        try {
            const { response, data: resData, error } = await API.POST("/sessions/", {
                body: data
            });

            if (response.ok && resData) {
                // Since resData matches ScheduleRow[] perfectly, we just set it directly!
                setResults(resData);
                setHasSearched(true);
            } else if ((response.status === 404 || response.status === 400) && error) {
                setVisibleErrors([error.detail as unknown as string]);
            } else if (response.status === 422 && error) {
                setVisibleErrors(["البيانات المدخلة غير صحيحة، يرجى مراجعة الحقول."]);
                console.warn(error.detail);
            }
        } catch {
            setVisibleErrors(["حدث خطأ غير متوقع في الاتصال بالخادم. يرجى المحاولة لاحقاً."]);
            console.error("Connection error");
        }
    };

    return (
        <Box dir="rtl" sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>

            {/* 1. Page Header */}
            <Box sx={{ bgcolor: '#0f172a', color: 'white', py: 6, mb: 6, borderBottom: '4px solid #ea580c' }}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        <Avatar sx={{ bgcolor: '#ea580c', width: 64, height: 64 }}>
                            <CalendarMonthIcon fontSize="large" />
                        </Avatar>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                                بحث عن جدول (المحاضرات والسكاشن)
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#cbd5e1' }}>
                                الفصل الدراسي الثاني (2025-2026)
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Stack spacing={4}>

                    {/* 2. Warning Alert */}
                    <Alert severity="warning" sx={{ borderRadius: 3, '& .MuiAlert-icon': { mt: 0.5 } }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#9a3412' }}>
                            تنبيه هام:
                        </Typography>
                        على الطالب متابعة هذه الصفحة بشكل دوري لمعرفة أي تغييرات في الجدول من مواعيد أو أماكن المحاضرات والسكاشن.
                    </Alert>

                    {/* 3. Search Form Card */}
                    <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: '1px solid #e2e8f0' }}>
                        <form onSubmit={handleSubmit(handleSearch)}>
                            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <TextField
                                        dir="ltr"
                                        fullWidth
                                        label="كود الطالب"
                                        placeholder="C*******"
                                        variant="outlined"
                                        required
                                        slotProps={{
                                            input: { sx: { bgcolor: '#f8fafc' } }
                                        }}
                                        {...register("code", { required: true })}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <TextField
                                        dir="ltr"
                                        fullWidth
                                        label="الرقم القومي"
                                        placeholder="أدخل الرقم القومي من 14 رقم"
                                        variant="outlined"
                                        type="number"
                                        inputMode="numeric"
                                        required
                                        slotProps={{
                                            input: { sx: { bgcolor: '#f8fafc' } }
                                        }}
                                        {...register("national_id", { required: true, minLength: 14, maxLength: 14 })}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', alignItems: 'stretch' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        loading={isSubmitting}
                                        fullWidth
                                        startIcon={<SearchIcon sx={{ ml: 1 }} />}
                                        sx={{
                                            bgcolor: '#2563eb',
                                            '&:hover': { bgcolor: '#1d4ed8' },
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            boxShadow: 'none',
                                            borderRadius: 2
                                        }}
                                    >
                                        بحث
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>

                    {/* 4. Error State UI */}
                    <Collapse in={visibleErrors.length > 0}>
                        <Alert 
                            severity="error" 
                            sx={{ 
                                borderRadius: 4, 
                                border: '1px solid #fca5a5', 
                                bgcolor: '#fef2f2',
                                color: '#991b1b',
                                '& .MuiAlert-icon': {
                                    color: '#ef4444',
                                    mt: 0.5
                                }
                            }}
                        >
                            <AlertTitle sx={{ fontWeight: 'bold', fontSize: '1.1rem', mb: 1 }}>
                                تنبيه
                            </AlertTitle>
                            <ul className="list-disc mr-5 m-0 p-0 space-y-1 font-medium">
                                {visibleErrors.map((err, index) => (
                                    <li key={index}>{err}</li>
                                ))}
                            </ul>
                        </Alert>
                    </Collapse>

                    {/* 5. Results Table */}
                    {hasSearched && (
                        <Paper elevation={0} sx={{ borderRadius: 4, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 600 }}>
                                <Table stickyHeader aria-label="schedule table">
                                    <TableHead>
                                        <TableRow>
                                            {['كود المادة', 'اسم المادة', 'محاضرة / سيكشن', 'اليوم', 'الفترة', 'المكان', 'اسم الدكتور'].map((header, idx) => (
                                                <TableCell
                                                    key={idx}
                                                    align="center"
                                                    sx={{
                                                        bgcolor: '#f97316',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        whiteSpace: 'nowrap',
                                                        borderBottom: 'none'
                                                    }}
                                                >
                                                    {header}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results.length > 0 ? (
                                            // We use flatMap on the outer array so React treats the resulting rows as a single list for the TableBody
                                            results.flatMap((subject) => 
                                                subject.sessions.map((session, idx) => (
                                                    <TableRow key={`${subject.subject_code}-${idx}`} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center" sx={{ fontWeight: 'bold', color: '#475569' }}>{subject.subject_code}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: 'bold', color: '#0f172a' }}>{subject.subject_name}</TableCell>
                                                        <TableCell align="center">
                                                            <Box component="span" sx={{
                                                                bgcolor: session.session_type === 'محاضرة' ? '#dbeafe' : '#fce7f3',
                                                                color: session.session_type === 'محاضرة' ? '#1e40af' : '#9d174d',
                                                                px: 2, py: 0.5, borderRadius: 4, fontSize: '0.875rem', fontWeight: 'bold'
                                                            }}>
                                                                {session.session_type}
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: 'bold', color: '#ea580c' }}>{session.day}</TableCell>
                                                        <TableCell align="center" sx={{ color: '#475569', direction: 'ltr' }}>
                                                            {`${session.time_start} - ${session.time_end}`}
                                                        </TableCell>
                                                        <TableCell align="center" sx={{ color: '#475569' }}>{session.location}</TableCell>
                                                        <TableCell align="center" sx={{ color: '#475569' }}>{session.doctor_name || 'غير محدد'}</TableCell>
                                                    </TableRow>
                                                ))
                                            )
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={7} align="center" sx={{ py: 6, color: '#64748b' }}>
                                                    لا توجد بيانات مطابقة لعملية البحث.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}

                    {/* 6. Important Instructions Box */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0', bgcolor: '#fffbeb' }}>
                        <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: "center" }}>
                            <InfoOutlinedIcon sx={{ color: '#d97706' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#92400e' }}>
                                تعليمات هامة
                            </Typography>
                        </Stack>
                        <ul className="text-[#92400e] space-y-2 mr-6 list-disc">
                            <li>يتم إدخال كود الطالب شامل الحرف بالأرقام (مثال: C123456).</li>
                            <li>يجب إدخال الرقم القومي المكون من 14 رقماً بشكل صحيح كما هو مسجل بشئون الطلاب.</li>
                            <li>في حالة وجود أي مشكلة في ظهور الجدول، يرجى مراجعة إدارة شئون الطلاب.</li>
                        </ul>
                    </Paper>

                </Stack>
            </Container>
        </Box>
    );
}