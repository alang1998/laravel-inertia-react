import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({links}) {
    return (
        <div>
            <nav aria-label="test">
                <ul className="pagination">
                    {links.map((link, key) => (
                        <li key={key} className={`page-item ${link.active && 'active'} ${link.url === null && 'disabled'}`}>
                            <Link 
                                as="button" disabled={link.url === null ? true : false} 
                                className="page-link" href={link.url} 
                                dangerouslySetInnerHTML={{ __html: link.label }} 
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
