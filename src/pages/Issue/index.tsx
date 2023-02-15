import { ArrowSquareOut,  Buildings, Calendar, CaretLeft, Cat, ChatCircle } from "phosphor-react";
import { IssueContainer,  IssueTitleContainer,  IssuTitle, IssueTitleFooter, IssueTitleLinks, IssueContent } from "./style";
import { api } from '../../lib/axios'
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink, useParams } from "react-router-dom";

interface IssueInterface {
    number: number,
    user: {
        login: String
    },
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
}

export function Issue() {
    const routeParams = useParams();

    const [issue, setIssue] = useState<IssueInterface | undefined>();

    const fetchIssue = async function(issueNumber: number) {
        const response = await api.get(
            `/repos/amnakai/rocketseat_reactjs_desafio3/issues/${issueNumber}`
        )

        setIssue(response.data);
    }

    fetchIssue(parseInt(routeParams?.issueNumber || ''));

    return (
        <IssueContainer>
            <IssueTitleContainer>

                <IssueTitleLinks>
                    <NavLink to="/" title="Home">
                        <CaretLeft size={12}/> Voltar
                    </NavLink>
                    
                    <a href={issue?.html_url} target="_blank">
                        GITHUB <ArrowSquareOut size={12}/>
                    </a>
                </IssueTitleLinks>

                <IssuTitle>{issue?.title}</IssuTitle>

                <IssueTitleFooter>
                    <div><Cat color="#3A536B" size={18}/>{issue?.user?.login}</div>
                    <div><Calendar color="#3A536B" size={18}/>
                    {formatDistanceToNow(new Date(issue?.created_at || new Date()), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                    </div>
                    <div><ChatCircle color="#3A536B" size={18}/>{issue?.comments} comentários</div>
                </IssueTitleFooter>

            </IssueTitleContainer>

            <IssueContent>
            <ReactMarkdown children={issue?.body || ''} remarkPlugins={[remarkGfm]} ></ReactMarkdown>
            </IssueContent>
            
        </IssueContainer>


    );
}