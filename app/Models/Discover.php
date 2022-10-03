<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Discover
 * 
 * @property int $id
 * @property Carbon $date
 * @property float $imf
 * @property float $bx_vector
 * @property float $by_vector
 * @property float $bz_vector
 * @property Carbon|null $created_at
 * @property Carbon $updated_at
 *
 * @package App\Models
 */
class Discover extends Model
{
	protected $table = 'discover';

	protected $casts = [
		'imf' => 'float',
		'bx_vector' => 'float',
		'by_vector' => 'float',
		'bz_vector' => 'float'
	];

	protected $dates = [
		'date'
	];

	protected $fillable = [
		'date',
		'imf',
		'bx_vector',
		'by_vector',
		'bz_vector'
	];
}
