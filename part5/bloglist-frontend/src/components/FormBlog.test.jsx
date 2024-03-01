import { render, screen, fireEvent} from '@testing-library/react'
import { assert, describe, expect, it, test} from 'vitest'
import FormBlog from './FormBlog'



describe('BlogForm Component', () => {
    it('Create a new Blog', ()=>{

        const createBlog = (e, values)=>{
            expect(values.title).toBe("Example")
            expect(values.url).toBe("Example")
            expect(values.likes).toBe("Example")
        }

        render(<FormBlog setBlogs={() => createBlog(e, values)} setLogIn={(e)=>console.log(e)}/>)

    
    })
});
