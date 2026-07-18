'use client';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from 'react';
import Nav from "./nav";

// Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Phone from "@mui/icons-material/Phone";
import Mail from "@mui/icons-material/Mail";

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const [deptOpen, setDeptOpen] = React.useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDeptToggle = () => {
        setDeptOpen(!deptOpen);
    };

    return (
        <>
            {/* 1. الشريط العلوي (Top Bar) */}
            <Box sx={{ bgcolor: '#0f172a', color: '#cbd5e1', py: 1, fontSize: '0.875rem' }}>
                <Container maxWidth="lg">
                    <Stack direction="row" sx={{ justifyContent: "space-around", alignItems: "center" }} spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>19622</Typography>
                            <Phone sx={{ color: '#f97316', fontSize: '1.1rem' }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2">info@cis.edu.eg</Typography>
                            <Mail sx={{ color: '#f97316', fontSize: '1.1rem' }} />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* 2. شريط التنقل الرئيسي (Navbar) */}
            <AppBar role="banner" position="sticky" color="default" elevation={1} sx={{ bgcolor: '#ffffff', zIndex: 1100 }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar slotProps={{img: {loading: "eager"}}} src='/logo-white.webp' alt="CIS white logo" sx={{ bgcolor: '#ea580c', width: 55, height: 55, fontWeight: 'bold', boxShadow: 2 }} />

                            <Typography variant="h6" component="div" sx={{ fontWeight: 800, color: '#1e293b', display: { xs: 'none', lg: 'block' } }}>
                                المعهد العالي لعلوم الحاسب ونظم المعلومات
                            </Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1e293b', display: { xs: 'block', lg: 'none' } }}>
                                معهد CIS
                            </Typography>
                        </Box>

                        {/* Desktop Nav (Hides automatically below md breakpoint) */}
                        <Nav />

                        {/* Hamburger Icon for Mobile (Shows automatically below md breakpoint) */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, color: '#1e293b' }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* 3. Mobile Navigation Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: '#ffffff' },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
                    <Avatar src='/logo-white.webp' alt="CIS logo" sx={{ bgcolor: '#ea580c', width: 45, height: 45 }} />
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b' }}>معهد CIS</Typography>
                </Box>

                <List role="navigation" dir="rtl" sx={{ p: 2 }}>
                    <ListItemButton component={Link} href="/" onClick={handleDrawerToggle} sx={{ borderRadius: 2, mb: 1 }}>
                        <ListItemText primary="الرئيسية" sx={{ textAlign: 'right', '& span': { fontWeight: 'bold', color: '#475569' } }} />
                    </ListItemButton>

                    <ListItemButton component={Link} href="/about" onClick={handleDrawerToggle} sx={{ borderRadius: 2, mb: 1 }}>
                        <ListItemText primary="عن المعهد" sx={{ textAlign: 'right', '& span': { fontWeight: 'bold', color: '#475569' } }} />
                    </ListItemButton>

                    <ListItemButton onClick={handleDeptToggle} sx={{ borderRadius: 2, mb: 1 }}>
                        <ListItemText primary="الأقسام العلمية" sx={{ textAlign: 'right', '& span': { fontWeight: 'bold', color: '#475569' } }} />
                        {deptOpen ? <ExpandLess sx={{ color: '#ea580c' }} /> : <ExpandMore sx={{ color: '#475569' }} />}
                    </ListItemButton>

                    {/* Mobile Dropdown Sub-menu */}
                    <Collapse in={deptOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={Link} href="/department/cs" onClick={handleDrawerToggle} sx={{ pr: 4, borderRadius: 2 }}>
                                <ListItemText primary="علوم الحاسب" sx={{ textAlign: 'right', '& span': { color: '#64748b' } }} />
                            </ListItemButton>
                            <ListItemButton component={Link} href="/department/is" onClick={handleDrawerToggle} sx={{ pr: 4, borderRadius: 2 }}>
                                <ListItemText primary="نظم المعلومات إداريه" sx={{ textAlign: 'right', '& span': { color: '#64748b' } }} />
                            </ListItemButton>
                            <ListItemButton component={Link} href="/department/ba" onClick={handleDrawerToggle} sx={{ pr: 4, borderRadius: 2 }}>
                                <ListItemText primary="إدارة اعمال و محاسبه" sx={{ textAlign: 'right', '& span': { color: '#64748b' } }} />
                            </ListItemButton>
                            <ListItemButton component={Link} href="/department/ps" onClick={handleDrawerToggle} sx={{ pr: 4, borderRadius: 2 }}>
                                <ListItemText primary="علوم سياسيه" sx={{ textAlign: 'right', '& span': { color: '#64748b' } }} />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton component={Link} href="/students" onClick={handleDrawerToggle} sx={{ borderRadius: 2, mb: 1, mt: 1 }}>
                        <ListItemText primary="شئون الطلاب" sx={{ textAlign: 'right', '& span': { fontWeight: 'bold', color: '#475569' } }} />
                    </ListItemButton>

                    <ListItemButton component={Link} href="/news" onClick={handleDrawerToggle} sx={{ borderRadius: 2 }}>
                        <ListItemText primary="المركز الإعلامي" sx={{ textAlign: 'right', '& span': { fontWeight: 'bold', color: '#475569' } }} />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    )
}