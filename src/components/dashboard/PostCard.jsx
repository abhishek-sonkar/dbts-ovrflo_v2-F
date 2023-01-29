import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, CardContent } from '@mui/material';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export default function PostCard(props) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia
          sx={{
            pt: 'calc(100% * 4 / 3)',
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }
          }
        >
          <StyledCover src={props.image} />
        </StyledCardMedia>
        <CardContent
          sx={{
            pt: 4,
            bottom: 0,
            width: '100%',
            position: 'absolute',
          }
          }
        >
          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              typography: 'h5', height: 60,
              color: 'common.white',
            }}
          >
            {props.text}
          </StyledTitle>
        </CardContent>
      </Card>
    </Grid>
  );
}