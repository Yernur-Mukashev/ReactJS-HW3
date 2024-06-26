import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function Nav() {
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					"& > *": {
						m: 1,
					},
				}}
			>
				<ButtonGroup variant="text" aria-label="Basic button group">
					<Button>Главная</Button>
					<Button>Каталог</Button>
					<Button>Контакты</Button>
				</ButtonGroup>
			</Box>
		</div>
	);
}
