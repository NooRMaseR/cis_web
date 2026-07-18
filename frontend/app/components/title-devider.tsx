import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TitleDeviderProps = {
    text: string;
    color?: string;
};

export default function TitleDevider({ text, color="#0f172a"}: TitleDeviderProps) {
    return (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 850, color, position: 'relative', display: 'inline-block', pb: 1.5 }}>
                {text}
                <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 4, bgcolor: '#f97316', borderRadius: 1 }} />
            </Typography>
        </Box>
    )
}
