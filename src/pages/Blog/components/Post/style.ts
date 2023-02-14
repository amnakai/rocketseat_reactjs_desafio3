import styled from 'styled-components'


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['base_post']};
    border-radius: 10px;
    height: 16.25rem;
    padding: 2rem;
`

export const PostTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 60px;

    margin-bottom: 1rem;
    gap: 1rem;

    strong {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${(props) => props.theme['base_title']};
    }

    span {
        font-size: 0.75rem;
        color: ${(props) => props.theme['base_span']};
        justify-self: end;
    }

`

export const PostText = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
`