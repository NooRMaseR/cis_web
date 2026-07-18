'use client';

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Icons
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Phone from "@mui/icons-material/Phone";
import Mail from "@mui/icons-material/Mail";
import Room from "@mui/icons-material/Room";

export default function Footer() {
  return (
    <Box role="contentinfo" component="footer" sx={{ bgcolor: '#0f172a', color: '#cbd5e1', pt: 8, pb: 4, borderTop: '4px solid #ea580c' }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={6} sx={{ mb: 6, justifyContent: "space-between" }}>
          
          {/* Column 1: Logo and About */}
          <Grid 
            size={{ xs: 12, md: 5 }} 
            sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'right' } }}
          >
            <Avatar 
              src="/logo-white.webp" 
              alt="CIS white logo" 
              sx={{ 
                bgcolor: '#ea580c', 
                width: 140, 
                height: 140, 
                fontWeight: 'bold', 
                mb: 3,
                boxShadow: '0 4px 20px rgba(234, 88, 12, 0.4)'
              }}
            >
              CIS
            </Avatar>
            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 2 }}>
              المعهد العالي لعلوم الحاسب ونظم المعلومات
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#94a3b8' }}>
              صرح تعليمي رائد يهدف إلى تزويد الطلاب بالمهارات التقنية اللازمة لمواكبة سوق العمل العالمي، وإعداد كوادر متميزة في مجالات التكنولوجيا والإدارة.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton title="Facebook" href="https://facebook.com" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#ea580c', bgcolor: 'rgba(234, 88, 12, 0.1)' } }}>
                <Facebook />
              </IconButton>
              <IconButton title="YouTube" href="https://youtube.com" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#ea580c', bgcolor: 'rgba(234, 88, 12, 0.1)' } }}>
                <YouTube />
              </IconButton>
              <IconButton title="Instagram" href="https://instagram.com" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#ea580c', bgcolor: 'rgba(234, 88, 12, 0.1)' } }}>
                <Instagram />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Map and Contact Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 4, position: 'relative', display: 'inline-block', pb: 1 }}>
              معلومات الاتصال
              <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 40, height: 3, bgcolor: '#ea580c', borderRadius: 1 }} />
            </Typography>

            <Stack spacing={3}>
              {/* Responsive Map Container */}
              <Box sx={{ width: '100%', height: 200, borderRadius: 3, overflow: 'hidden', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13821.925268375664!2d31.434293!3d29.994333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cb080ef5685%3A0x1a58ed16c4fac2b!2z2KfZg9in2K_ZitmF2YrYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqQ!5e0!3m2!1sar!2seg!4v1784059236283!5m2!1sar!2seg" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="CIS Location"
                >Location</iframe>
              </Box>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'flex-start', gap: 1.5 }}>
                    <Avatar sx={{ bgcolor: 'rgba(234, 88, 12, 0.1)', color: '#f97316', width: 36, height: 36, mt: 0.5 }}>
                      <Room fontSize="small" />
                    </Avatar>
                    <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                      التجمع الخامس، القاهرة الجديدة، بجوار أكاديمية الشرطة، مصر.
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ bgcolor: 'rgba(234, 88, 12, 0.1)', color: '#f97316', width: 36, height: 36 }}>
                        <Phone fontSize="small" />
                      </Avatar>
                      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold', direction: 'ltr' }}>
                        19622
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ bgcolor: 'rgba(234, 88, 12, 0.1)', color: '#f97316', width: 36, height: 36 }}>
                        <Mail fontSize="small" />
                      </Avatar>
                      <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                        info@cis.edu.eg
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#1e293b', mb: 3 }} />
        
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: "space-between", alignItems: 'center' }} spacing={2}>
          <Typography variant="body2" sx={{ color: '#64748b' }} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} المعهد العالي لعلوم الحاسب ونظم المعلومات. جميع الحقوق محفوظة.
          </Typography>
          <Typography variant="caption" sx={{ color: '#475569' }}>
            تم التطوير بواسطة NooRMaseR
          </Typography>
        </Stack>

      </Container>
    </Box>
  )
}