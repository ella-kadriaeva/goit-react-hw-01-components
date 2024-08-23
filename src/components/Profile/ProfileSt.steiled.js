import styled from '@emotion/styled';

export const Stats = styled.ul`
border: 1px solid #f5f4fa;
margin-right: auto;
margin-left: auto;
background-color: rgb(192, 197, 197);
display: flex;
justify-content: space-around;
`
export const StatsHead = styled.li`
display: flex;
flex-direction: column;
`;
export const Label = styled.span`
font-weight: 400;
font-size: 18px;
`;
export const Quantity = styled.span`
font-weight: 700;
font-size: 20px;
`;
export const Name = styled.p`
font-weight: 900;
font-size: 24px;
`;
export const Tag = styled.p`
font-size: 18px;
`;
export const Location = styled.p`
font-size: 20px;
`;
export const Profile = styled.div`
min-height: 110px;
min-width: 300px;
border: 1px solid #f5f4fa;
color: #212121;
line-height: 2;
font-weight: 700;
`;
export const BlockDescription = styled.div`
text-align: center;
padding: 20px;
margin: 0;
`;
export const Avatar = styled.img`
margin: 0 auto;
height: 140px;
width: 140px;
border-radius: 50%;
border: none;
`;