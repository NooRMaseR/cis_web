'use client';

import React from 'react';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import { usePathname } from 'next/navigation';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Nav() {
    const path = usePathname().split("/")[1];
    const [depAnchorEl, setDepAnchorEl] = React.useState<null | HTMLElement>(null);
    const [serAnchorEl, setSerAnchorEl] = React.useState<null | HTMLElement>(null);
    const depOpened = Boolean(depAnchorEl);
    const serOpened = Boolean(serAnchorEl);

    const handleDepDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
        setDepAnchorEl(event.currentTarget);
    };

    const handleDepDropdownClose = () => {
        setDepAnchorEl(null);
    };
    
    const handleSerDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
        setSerAnchorEl(event.currentTarget);
    };

    const handleSerDropdownClose = () => {
        setSerAnchorEl(null);
    };

    return (
        <Stack role="navigation" direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex', gap: '0.5rem' }, alignItems: 'center' }}>

            <Link
                className={path === "" ? "text-[#ea580c] font-bold" : "text-[#475569] hover:text-[#ea580c] transition"}
                href="/"
            >
                الرئيسية
            </Link>

            <Link
                className={path === "about" ? "text-[#ea580c] font-bold" : "text-[#475569] hover:text-[#ea580c] transition"}
                href="/about"
            >
                عن المعهد
            </Link>

            {/* --- Department Dropdown Trigger --- */}
            <div
                onClick={handleDepDropdownClick}
                className={`cursor-pointer flex items-center transition hover:text-[#ea580c] ${path === "department" ? "text-[#ea580c] font-bold" : "text-[#475569]"}`}
            >
                الأقسام العلمية
                <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                        transform: depOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                    }}
                />
            </div>

            {/* --- Department Dropdown Menu Items --- */}
            <Menu
                anchorEl={depAnchorEl}
                open={depOpened}
                onClose={handleDepDropdownClose}
                disableScrollLock={true}
                sx={{ mt: 1.5, minWidth: 180, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
                <MenuItem onClick={handleDepDropdownClose} component={Link} href="/department/cs">
                    علوم الحاسب
                </MenuItem>
                <MenuItem onClick={handleDepDropdownClose} component={Link} href="/department/is">
                    نظم المعلومات إداريه
                </MenuItem>
                <MenuItem onClick={handleDepDropdownClose} component={Link} href="/department/ba">
                    إدارة اعمال و محاسبه
                </MenuItem>
                <MenuItem onClick={handleDepDropdownClose} component={Link} href="/department/ps">
                    علوم سياسيه
                </MenuItem>
            </Menu>
            
            {/* --- Services Dropdown Trigger --- */}
            <div
                onClick={handleSerDropdownClick}
                className={`cursor-pointer flex items-center transition hover:text-[#ea580c] ${path === "services" ? "text-[#ea580c] font-bold" : "text-[#475569]"}`}
            >
                الخدمات الطلابيه
                <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                        transform: serOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                    }}
                />
            </div>

            {/* --- Services Dropdown Menu Items --- */}
            <Menu
                anchorEl={serAnchorEl}
                open={serOpened}
                onClose={handleSerDropdownClose}
                disableScrollLock={true}
                sx={{ mt: 1.5, minWidth: 180, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
                <MenuItem onClick={handleSerDropdownClose} component={Link} href="/services/student-lecture">
                    اعرف جدولك
                </MenuItem>
                <MenuItem onClick={handleSerDropdownClose} component={Link} href="/services/collage-email">
                    الاميل الجامعى
                </MenuItem>
            </Menu>

            <Link
                className={path === "news" ? "text-[#ea580c] font-bold" : "text-[#475569] hover:text-[#ea580c] transition"}
                href="/news"
            >
                اخبارنا
            </Link>

        </Stack>
    );
};
