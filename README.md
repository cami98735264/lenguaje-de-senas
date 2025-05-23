# Lenguaje de Señas (Sign Language Translator)

A web application that translates Spanish text into Spanish Sign Language (LSE) using both static images and animated GIFs. The application provides real-time translation with visual representation of signs.

## Project Structure

### Backend (`/backend`)
- **index.js**: Main server file that handles translation requests using OpenAI's GPT-3.5-turbo-16k model
- **lds_input.txt**: Contains extensive training data and examples for Spanish to LSE translation
- **package.json**: Backend dependencies and project metadata
- **node_modules/**: Dependencies installation directory

### Frontend (`/frontend`)
- **index.js**: Client-side application logic with GIF animation handling
- **index.html**: Clean, responsive web interface
- **index.css**: Modern styling with Roboto font and responsive design
- **public/**: Directory containing:
  - Default image (`default-img.png`)
  - Sign language GIFs for words
  - External GIF resources for letter spelling

## Features

- **Text-to-Sign Language Translation**
  - Supports both word-level and letter-level sign language representation
  - Handles complex Spanish grammar and sentence structures
  - Provides real-time translation processing

- **Visual Representation**
  - Animated GIF support for sign language visualization
  - Smooth transitions between signs
  - Responsive image container with fixed dimensions

- **User Interface**
  - Clean, modern design with Roboto font
  - Responsive layout that works on various screen sizes
  - Intuitive input form with focus states
  - Clear visual feedback for user actions

- **Error Handling**
  - Comprehensive error handling for various scenarios
  - User-friendly error messages
  - Server availability checks
  - Input validation

## Technical Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web server framework
- **OpenAI API**: GPT-3.5-turbo-16k for translation
- **CORS**: Cross-origin resource sharing
- **Wink Tokenizer**: Advanced text processing
- **dotenv**: Environment variable management

### Frontend
- **Vanilla JavaScript**: No framework dependencies
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox
- **Fetch API**: Backend communication
- **Google Fonts**: Roboto font integration

## API Endpoints

### GET /translate
Translates Spanish text into sign language representation.

**Query Parameters:**
- `text`: The Spanish text to be translated

**Response:**
```json
{
    "message": [
        {
            "value": "word",
            "tag": "word" // Can be "word" or "quoted_phrase"
        }
    ],
    "status": 200,
    "success": true
}
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cami98735264/lenguaje-de-senas.git
   cd lenguaje-de-senas
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

4. Start the backend server:
   ```bash
   node index.js
   ```
   The server will run on port 5001

5. Open the frontend:
   - Navigate to `frontend/index.html` in your web browser
   - No additional setup required for the frontend

## Usage

1. Enter Spanish text in the input field
2. Press Enter or submit the form
3. The system will:
   - Process the text through the translation service
   - Display the translated sign language representation
   - Show animated GIFs for each word or letter
   - Handle punctuation and special characters appropriately

## Development

### Backend Development
- The translation system uses a comprehensive training dataset in `lds_input.txt`
- The system handles various Spanish grammar structures and converts them to LSE
- Error handling includes rate limiting and API availability checks

### Frontend Development
- The UI is built with a mobile-first approach
- GIF animation handling includes duration calculation
- The interface is responsive and works across devices

## Dependencies

### Backend
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "openai": "^3.2.1",
    "wink-tokenizer": "^5.3.0"
  }
}
```

### Frontend
- No external dependencies required
- Uses native browser APIs
- Google Fonts for typography

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the translation API
- The sign language community for their resources
- Contributors and maintainers of the project
