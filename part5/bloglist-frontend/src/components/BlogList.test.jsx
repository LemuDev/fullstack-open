import { render, screen, fireEvent} from '@testing-library/react'
import { describe, expect, it, test} from 'vitest'

import BlogList from "./BlogList"

const mock = [
    {
        author: {name: 'Lemuel Cruz', username: 'lemudev', id: '65d3a3f08ea6fc49e5b62a1b'},
        id: "1",
        likes: 2,
        title: "das",
        url: "222222222222222"
    },
    {
        author: {name: 'Lemuel Cruz', username: 'lemudev', id: '65d3a3f08ea6fc49e5b62a1b'},
        id: "2",
        likes: 2,
        title: "das",
        url: "222222222222222"
    },
    {
        author: {name: 'Lemuel Cruz', username: 'lemudev', id: '65d3a3f08ea6fc49e5b62a1b'},
        id: "3",
        likes: 2,
        title: "das",
        url: "222222222222222"
    },    
    {
        author: {name: 'Lemuel Cruz', username: 'lemudev', id: '65d3a3f08ea6fc49e5b62a1b'},
        id: "4",
        likes: 2,
        title: "das",
        url: "222222222222222"
    }
]



describe('Blog List', () => {

    it("TEST Rendering Component", () => {
        screen.debug()
    })

    it("Active edit Mode", () => {
        const { container } = render(<BlogList blogs={mock} setBlogs={(e)=> console.log(e) } setLogIn={(e)=>console.log(e)}/>)
        
        const editBtn = container.querySelector("#EditModeBtn")
        fireEvent.click(editBtn)
        
        const formEdit = container.querySelector("#form-edit")

        expect(formEdit[0]).toBeDefined();
    })  

})
