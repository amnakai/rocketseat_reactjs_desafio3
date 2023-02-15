import { ArrowSquareOut, Buildings, Cat, User } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { BlogContainer, PostListContainer, ProfileContainer, ProfileContent, ProfileDescription, ProfileFooter, ProfileHeader, ProfileImg, PublicationCounterContainer, PublicationSearchForm } from "./style";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import debounce from 'lodash.debounce';



interface User {
    name: string,
    avatar_url: string,
    login: string,
    company: string,
    bio: string,
    followers: number,
    html_url: string
}

interface Post {
    number: 3,
    title: string,
    created_at: string,
    body: string
}

const searchFormSchema = z.object({
    query: z.string(),
})
  
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
    const [user, setUser] = useState<User | undefined>();
    const [postList, setPostList] = useState<Post[]>([]);
    
    const fetchUser = useCallback(
        async (callback:(user:User) => void) =>{
            const response = await api.get(
                `/users/amnakai`
            );
            callback(response.data);
        }, []
    )

    const searchPosts = useCallback(
        async (query: string) => {
    
            try {
                const response = await api.get(
                    `/search/issues?q=${query} repo:amnakai/rocketseat_reactjs_desafio3`
                )
                setPostList(response.data.items);
            } catch (error) {
                console.log(error)
            }
        }, []
    ) 
 
    async function handleSearch(data: SearchFormInputs) {
        searchPosts(data.query);
    }

    const debouncedHandleSearch = useCallback(
        debounce(handleSearch, 300), []
    )

    useEffect(() => {
        fetchUser(setUser);
        searchPosts('');
    }, [])

    const {
        register,
        handleSubmit
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    return (
        <BlogContainer>
            <ProfileContainer>
                <ProfileImg src={user?.avatar_url}></ProfileImg>

                <ProfileContent>
                    <ProfileHeader>
                        <strong>{user?.name}</strong>
                        <a href={user?.html_url} target="_blank">
                            GITHUB <ArrowSquareOut size={12}/>
                        </a>
                    </ProfileHeader>

                    <ProfileDescription>{user?.bio}</ProfileDescription>

                    <ProfileFooter>
                        <div><Cat color="#3A536B" size={18}/>{user?.login}</div>
                        <div><Buildings color="#3A536B" size={18}/>{user?.company}</div>
                        <div><User color="#3A536B" size={18}/>{user?.followers} seguidores</div>
                    </ProfileFooter>

                </ProfileContent>

            </ProfileContainer>


            <PublicationCounterContainer>
                <strong>Publicações</strong>
                <span>{postList.length} publicações</span>
            </PublicationCounterContainer>

            <PublicationSearchForm onChange={handleSubmit(debouncedHandleSearch)}>
                <input 
                    type='text' 
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </PublicationSearchForm>

            <PostListContainer>
                {postList.map(
                    (post) => {
                        return (
                            <NavLink  key={post.number} to={`/issue/${post.number}`}>
                                <Post 
                                    title={post.title}
                                    body={post.body}
                                    created_at={post.created_at}
                                />
                            </NavLink>
                        )
                    }

                )}
            </PostListContainer>

        </BlogContainer>
    );
}