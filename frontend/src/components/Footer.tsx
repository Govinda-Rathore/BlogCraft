import { Link } from 'react-router-dom'
import { PenTool, Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 relative bottom-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <PenTool className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">BlogCraft</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting stories that matter. A platform for writers and readers to connect through the power of words.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Writing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lifestyle</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BlogCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer