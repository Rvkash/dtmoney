import styled from "styled-components"

export const Container = styled.div`
	margin-top: 4rem;

	table {
		with: 100%;
		border-spacing: 0 0.5rem;
		margin-left: 3.5rem;

		th {
			color: var(--text-body);
			font-weight: 400;
			padding: 1rem 2rem;
			text-align: center;
			line-height: 1.5rem;
		}

		td {
			padding: 1rem 2rem;
			border: 0;
			background: var(--shape);
			color: var(--text-body);
			border-radius: 0.22rem;

			&:first-child {
				color: var(--text-tittle);
			}

			&.deposit {
				color: var(--green);
			}

			&.withdraw {
				color: var(--red);	
			}
		}
	}
	
`;