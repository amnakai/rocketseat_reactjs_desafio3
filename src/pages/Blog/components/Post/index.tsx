import { PostContainer, PostText, PostTitle } from "./style";
import { formatDistanceToNow, formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post(props: any) {
    return (
        <PostContainer>
            <PostTitle>
                <strong>
                    {props.title}
                </strong>
                <span>
                    {formatDistanceStrict(new Date(props.created_at), new Date(), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </span>
            </PostTitle>

            <PostText>
                <ReactMarkdown children={props.body || ''} remarkPlugins={[remarkGfm]} ></ReactMarkdown>
            </PostText>
        </PostContainer>
    )
}