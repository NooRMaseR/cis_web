'use client';

import Typography from "@mui/material/Typography";
import AlertTitle from "@mui/material/AlertTitle";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import WindowIcon from '@mui/icons-material/Window';

import { type SubmitErrorHandler, useForm } from "react-hook-form";
import type { components } from "@/app/generated/dtype";
import { API } from "@/app/utils/api";
import React from 'react';

type CollageEmailForm = components['schemas']['StudentDataRequest'];

export default function CollageEmail() {
    const [credentials, setCredentials] = React.useState<{ email: string, password: string } | null>(null);
    const [visibleErrors, setVisibleErrors] = React.useState<string[]>([]);
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<CollageEmailForm>();

    const handleSearch = async (data: CollageEmailForm) => {
        setCredentials(null);
        setVisibleErrors([]);

        try {
            const { response, data: resData, error } = await API.POST("/collage-email/",
                {
                    body: data
                }
            );
            if (response.ok && resData) {
                setCredentials({ email: resData.email, password: resData.password });
            } else if (response.status == 404 && error) {
                setVisibleErrors([error.detail as unknown as string]);
            } else if (response.status == 422 && error) {
                setVisibleErrors([error.detail as unknown as string]);
                console.warn(error.detail);
            }
        } catch {
            setVisibleErrors(["حدث خطأ غير متوقع في الاتصال بالخادم. يرجى المحاولة لاحقاً."]);
        }
    };

    const onFormErrors: SubmitErrorHandler<CollageEmailForm> = (errors) => {
        const ers: string[] = [];
        if (errors.national_id?.message)
            ers.push(errors.national_id.message);
        if (errors.code?.message)
            ers.push(errors.code.message);
        setVisibleErrors(ers);
    }

    const copyPassword = async () => {
        if (credentials?.password)
            await navigator.clipboard.writeText(credentials.password);
    };

    return (
        <Box dir="rtl" sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>

            {/* 1. Page Header */}
            <Box sx={{ bgcolor: '#0f172a', color: 'white', py: 6, mb: 6, borderBottom: '4px solid #ea580c' }}>
                <Container maxWidth="lg">
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ alignItems: "center", textAlign: { xs: 'center', md: 'right' } }}>
                        <Avatar sx={{ bgcolor: '#ea580c', width: 70, height: 70, boxShadow: '0 4px 15px rgba(234, 88, 12, 0.4)' }}>
                            <VpnKeyIcon fontSize="large" />
                        </Avatar>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.4 }}>
                                الحصول على بيانات الدخول الموحدة لـ
                                <br />
                                <span style={{ color: '#f97316' }}>منصة التعليم الالكتروني (LMS) و Microsoft Teams</span>
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Stack spacing={5}>

                    {/* 2. Search Form Card */}
                    <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: '1px solid #e2e8f0' }}>
                        <form onSubmit={handleSubmit(handleSearch, onFormErrors)}>
                            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <TextField
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
                                        fullWidth
                                        label="الرقم القومي"
                                        placeholder="ادخل الرقم القومي من 14 رقم"
                                        variant="outlined"
                                        type="number"
                                        inputMode="numeric"
                                        required
                                        slotProps={{
                                            input: { sx: { bgcolor: '#f8fafc' } }
                                        }}
                                        {...register("national_id", {
                                            required: true,
                                            minLength: {
                                                value: 14,
                                                message: "الرقم القومى يجب ان يكون 14 رقم"
                                            },
                                            maxLength: {
                                                value: 14,
                                                message: "الرقم القومى يجب ان يكون 14 رقم"
                                            }
                                        })}
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

                    {/* 3. Error State UI */}
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

                    {/* 4. Search Results (Unified Credentials Box) */}
                    {credentials && (
                        <Paper elevation={0} sx={{ borderRadius: 4, border: '2px solid #10b981', overflow: 'hidden' }}>
                            <Box sx={{ bgcolor: '#ecfdf5', py: 2, px: 4, borderBottom: '1px solid #a7f3d0' }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#065f46', textAlign: 'center' }}>
                                    تم استخراج بيانات الدخول بنجاح
                                </Typography>
                            </Box>

                            <Box sx={{ p: { xs: 3, md: 5 } }}>
                                <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: '#f8fafc', borderRadius: 4, border: '1px solid #e2e8f0', textAlign: 'center' }}>

                                            {/* Unified Icons Header */}
                                            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mb: 2 }}>
                                                <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb' }}>
                                                    <SchoolIcon />
                                                </Avatar>
                                                <Avatar sx={{ bgcolor: '#f3e8ff', color: '#9333ea' }}>
                                                    <WindowIcon />
                                                </Avatar>
                                            </Stack>

                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0f172a', mb: 4 }}>
                                                بيانات الدخول الموحدة للمنصتين
                                            </Typography>

                                            <Box sx={{ mb: 4 }}>
                                                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 1 }}>البريد الإلكتروني الجامعي الموحد</Typography>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e293b', direction: 'ltr', display: 'inline-block' }}>
                                                    {credentials.email}
                                                </Typography>
                                            </Box>

                                            <Divider sx={{ mb: 4, mx: { xs: 2, md: 10 } }} />

                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 1 }}>كلمة المرور الموحدة</Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ea580c', direction: 'ltr', mb: 3 }}>
                                                    {credentials.password}
                                                </Typography>
                                                <Button onClick={copyPassword} size="large" variant="outlined" color="primary" startIcon={<ContentCopyIcon sx={{ ml: 1 }} />}>
                                                    نسخ كلمة المرور
                                                </Button>
                                            </Box>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    )}

                    {/* 5. Quick Links */}
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 3 }}>
                            روابط الدخول
                        </Typography>
                        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{ py: 2, color: '#ea580c', borderColor: '#ea580c', borderRadius: 3, display: 'flex', gap: 1, '&:hover': { bgcolor: '#fff7ed' } }}
                                >
                                    <SchoolIcon />
                                    <Typography sx={{ fontWeight: 'bold' }}>الذهاب لمنصة LMS</Typography>
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{ py: 2, color: '#9333ea', borderColor: '#9333ea', borderRadius: 3, display: 'flex', gap: 1, '&:hover': { bgcolor: '#faf5ff' } }}
                                >
                                    <WindowIcon />
                                    <Typography sx={{ fontWeight: 'bold' }}>الذهاب لـ Microsoft Teams</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* 6. Important Instructions Box */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0', bgcolor: '#fffbeb' }}>
                        <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: "center" }}>
                            <InfoOutlinedIcon sx={{ color: '#d97706' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#92400e' }}>
                                تعليمات هامة
                            </Typography>
                        </Stack>
                        <ul className="text-[#92400e] space-y-2 mr-6 list-disc font-medium">
                            <li>يراعى ادخال كود الطالب شامل الحرف + الارقام (مثال: C1234567).</li>
                            <li>يراعى ادخال الرقم القومي باللغة الانجليزية بشكل صحيح.</li>
                            <li>بيانات الدخول (البريد وكلمة المرور) الظاهرة أعلاه تستخدم للدخول على كلا المنصتين.</li>
                            <li>أي مشكلة بنتيجة البحث يرجى التوجه لشئون الطلبة للاستفسار عنها.</li>
                        </ul>
                    </Paper>

                </Stack>
            </Container>
        </Box>
    );
}